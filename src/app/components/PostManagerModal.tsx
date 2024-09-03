import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/navigation';

interface Post {
  slug: string;
  title: string;
  image?: string;
}

interface PostManagerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onEdit: (slug: string) => void; // Added the onEdit prop
  onDelete: (slug: string) => void;
}

const PostManagerModal: React.FC<PostManagerModalProps> = ({
  isOpen,
  onRequestClose,
  onEdit, // Destructure onEdit
  onDelete,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/get-posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    if (isOpen) {
      fetchPosts(); // Fetch posts only when the modal is open
    }
  }, [isOpen]);

  const handleEdit = (slug: string) => {
    router.push(`/editor?slug=${slug}`); // Redirect to the editor with the slug as a query parameter
    onRequestClose(); // Close the modal
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-12 p-4">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <div key={post.slug} className="relative bg-white shadow-md rounded-md overflow-hidden">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-24 object-cover"
                />
              )}
              <div className="p-2">
                <h2 className="text-sm font-semibold text-brand-green">{post.title}</h2>
              </div>
              <button
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded"
                onClick={() => onDelete(post.slug)}
              >
                Delete
              </button>
              <button
                className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded"
                onClick={() => handleEdit(post.slug)} // Use the new handleEdit function
              >
                Edit
              </button>
            </div>
          ))
        )}
      </div>
    </Modal>
  );
};

export default PostManagerModal;
