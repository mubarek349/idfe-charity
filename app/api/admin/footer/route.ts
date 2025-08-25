import { NextRequest, NextResponse } from 'next/server';
import { getFooterContent, createFooterContent, updateFooterContent } from '@/actions/footer';

export async function GET() {
  try {
    const data = await getFooterContent();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch footer content' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await createFooterContent(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create footer content' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await updateFooterContent(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update footer content' }, { status: 500 });
  }
}