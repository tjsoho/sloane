import { NextResponse } from 'next/server';
import fs from 'fs-extra';
import path from 'path';

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ message: 'Slug is required' }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.md`);

  try {
    await fs.remove(filePath);
    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Failed to delete post:', error);
    return NextResponse.json({ message: 'Failed to delete post' }, { status: 500 });
  }
}
