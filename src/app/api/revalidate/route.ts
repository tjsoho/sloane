// src/app/api/revalidate/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  // Validate your revalidation secret
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Revalidate the entire blog page to refresh blog index
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/blog`);

    // Optionally revalidate individual blog post page if slug is provided
    if (slug) {
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/blog/${slug}`);
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
