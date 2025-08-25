import { NextRequest, NextResponse } from 'next/server';
import { getImpactStats, createImpactStat, updateImpactStat, deleteImpactStat } from '@/actions/impact';

export async function GET() {
  try {
    const data = await getImpactStats();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch impact stats' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await createImpactStat(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create impact stat' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await updateImpactStat(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update impact stat' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    const data = await deleteImpactStat(id);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete impact stat' }, { status: 500 });
  }
}