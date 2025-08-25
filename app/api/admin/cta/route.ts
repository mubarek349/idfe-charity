import { NextRequest, NextResponse } from 'next/server';
import { getCTAContent, createCTAContent, updateCTAContent } from '@/actions/cta';

export async function GET() {
  try {
    const data = await getCTAContent();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch CTA content' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await createCTAContent(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create CTA content' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await updateCTAContent(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update CTA content' }, { status: 500 });
  }
}