import React, { Suspense } from 'react';
import EditorPage from './page'; // Import the EditorPage

export default function EditorWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EditorPage />
        </Suspense>
    );
}
