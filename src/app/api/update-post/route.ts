import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return new NextResponse('Slug is required', { status: 400 });
  }

  const formData = await req.formData();
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as File | null;
  const existingImage = formData.get('existingImage') as string | null;

  if (!title || !content || !description) {
    return new NextResponse('Title, description, and content are required', { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Post not found', { status: 404 });
  }

  let imageUrl = existingImage; // Default to the existing image URL

  if (image) {
    const imageName = `${slug}-${image.name}`;
    const imagePath = path.join(process.cwd(), 'public', 'images', imageName);
    const buffer = Buffer.from(await image.arrayBuffer());
    await fs.writeFileSync(imagePath, buffer);
    imageUrl = `/images/${imageName}`;
  }

  const fileContent = `---
title: "${title}"
date: "${new Date().toISOString()}"
image: "${imageUrl || ''}"
description: "${description}"
---

${content}
`;

  try {
    fs.writeFileSync(filePath, fileContent);
    return new NextResponse('Post updated successfully', { status: 200 });
  } catch (error) {
    console.error('Failed to update post:', error);
    return new NextResponse('Failed to update post', { status: 500 });
  }
}
