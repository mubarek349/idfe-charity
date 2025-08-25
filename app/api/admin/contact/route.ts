import { NextRequest, NextResponse } from 'next/server';
import { getContactInfo, createContactInfo, updateContactInfo } from '@/actions/contact';

export async function GET() {
  try {
    const data = await getContactInfo();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch contact info' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await createContactInfo(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create contact info' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await updateContactInfo(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update contact info' }, { status: 500 });
  }
}