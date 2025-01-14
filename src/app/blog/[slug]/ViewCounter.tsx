'use client';

import { useEffect } from 'react';
import {
  doc,
  updateDoc,
  increment,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../../../utils/firebase';

export default function ViewCounter({ slug }: { slug: string }) {
  useEffect(() => {
    const incrementViews = async () => {
      try {
        console.log('Starting view increment for:', slug);
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, where('slug', '==', slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docSnapshot = querySnapshot.docs[0];
          if (docSnapshot) {
            const docId = docSnapshot.id;
            const postDoc = doc(db, 'posts', docId);
            console.log('Incrementing views for document:', docId);
            await updateDoc(postDoc, {
              views: increment(1),
            });
            console.log('Views incremented successfully');
          }
        } else {
          console.log('No document found with slug:', slug);
        }
      } catch (error) {
        console.error('Error incrementing views:', error);
      }
    };

    incrementViews();
  }, [slug]);

  return null;
}
