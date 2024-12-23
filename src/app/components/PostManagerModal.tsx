import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/navigation';
import { db } from '../../utils/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

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
        const querySnapshot = await getDocs(collection(db, 'posts')); // Fetch posts from Firestore
        const postList: Post[] = querySnapshot.docs.map((doc) => ({
          slug: doc.id, // Use the document ID as the slug
          title: doc.data().title,
          image: doc.data().image || '', // Fallback to an empty string if no image
        }));
        setPosts(postList);
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

  const handleDelete = async (slug: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        await deleteDoc(doc(db, 'posts', slug)); // Delete the post from Firestore
        setPosts((prevPosts) => prevPosts.filter((post) => post.slug !== slug)); // Update the UI
        alert('Post deleted successfully.');
      } catch (error) {
        console.error('Error deleting the post:', error);
        alert('An error occurred while deleting the post.');
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="grid grid-cols-2 gap-12 p-4 sm:grid-cols-3 xl:grid-cols-6 ">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.slug}
              className="relative overflow-hidden rounded-md bg-white shadow-md"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-24 w-full object-cover"
                />
              )}
              <div className="p-2">
                <h2 className="text-sm font-semibold text-brand-green">
                  {post.title}
                </h2>
              </div>
              <button
                className="absolute right-2 top-2 rounded bg-red-500 px-2 py-1 text-xs text-white"
                onClick={() => handleDelete(post.slug)} // Use handleDelete
              >
                Delete
              </button>
              <button
                className="absolute left-2 top-2 rounded bg-blue-500 px-2 py-1 text-xs text-white"
                onClick={() => handleEdit(post.slug)} // Use handleEdit
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
