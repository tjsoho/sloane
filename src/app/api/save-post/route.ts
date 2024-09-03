import { NextResponse } from 'next/server';
import fs from 'fs-extra';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  const formData = await request.formData();
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as File | null;
  const signature = formData.get('signature') as string | null;  // Get the signature from the form

  if (!title || !content) {
    return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
  }

  let imageUrl = null;
  if (image) {
    const imageName = `${uuidv4()}-${image.name}`;
    const imagePath = path.join(process.cwd(), 'public', 'images', imageName);

    try {
      const buffer = Buffer.from(await image.arrayBuffer());
      await fs.writeFile(imagePath, buffer);
      imageUrl = `/images/${imageName}`;
    } catch (error) {
      console.error('Failed to upload image:', error);
      return NextResponse.json({ message: 'Failed to upload image' }, { status: 500 });
    }
  }

  // Generate the slug for the post
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  const postDir = path.join(process.cwd(), 'src', 'content');
  const filePath = path.join(postDir, `${slug}.md`);

  // Create the markdown file content with front matter
  const fileContent = `---
title: "${title}"
description: "${description}"
date: "${new Date().toISOString()}"
image: "${imageUrl}"
signature: "${signature || ''}"
---

${content}
`;

  try {
    // Ensure the content directory exists and save the file
    await fs.ensureDir(postDir);
    await fs.writeFile(filePath, fileContent);

    return NextResponse.json({ message: 'Post saved successfully!' });
  } catch (error) {
    console.error('Failed to save post:', error);
    return NextResponse.json({ message: 'Failed to save post' }, { status: 500 });
  }
}
