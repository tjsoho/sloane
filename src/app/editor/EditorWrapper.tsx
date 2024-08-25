import React, { Suspense } from 'react';
import EditorPage from './page'; // Add missing import statement

export default function EditorWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EditorPage />
        </Suspense>
    );
}
