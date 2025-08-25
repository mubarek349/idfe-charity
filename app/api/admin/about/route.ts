import { NextRequest, NextResponse } from 'next/server';
import { getAboutContent, createAboutContent, updateAboutContent } from '@/actions/about';

export async function GET() {
  try {
    const data = await getAboutContent();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch about content' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await createAboutContent(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create about content' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await updateAboutContent(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update about content' }, { status: 500 });
  }
}