import React, { Suspense } from 'react';
// import ProtectedEditor from '../components/ProtectedEditor'; // Adjust the import path as necessary
import EditorPage from './page'; // Import the EditorPage

export default function EditorWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <ProtectedEditor> */}
        <EditorPage />
      {/* </ProtectedEditor> */}
    </Suspense>
  );
}
