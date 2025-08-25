import { NextRequest, NextResponse } from 'next/server';
import { getHeroContent, createHeroContent, updateHeroContent } from '@/actions/hero';

export async function GET() {
  try {
    const data = await getHeroContent();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch hero content' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await createHeroContent(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create hero content' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await updateHeroContent(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update hero content' }, { status: 500 });
  }
}