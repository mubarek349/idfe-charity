'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getAboutContent() {
  try {
    const content = await db.aboutContent.findFirst({
      where: { isActive: true },
      orderBy: { updatedAt: 'desc' }
    });
    return content;
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}

export async function createAboutContent(data: {
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: Array<{ title: string; description: string }>;
  imageUrl?: string;
}) {
  try {
    await db.aboutContent.updateMany({
      where: { isActive: true },
      data: { isActive: false }
    });

    const content = await db.aboutContent.create({
      data: { ...data, isActive: true }
    });

    revalidatePath('/');
    return content;
  } catch (error) {
    console.error('Error creating about content:', error);
    throw new Error('Failed to create about content');
  }
}

export async function updateAboutContent(data: {
  id: string;
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: Array<{ title: string; description: string }>;
  imageUrl?: string;
}) {
  try {
    const content = await db.aboutContent.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        mission: data.mission,
        vision: data.vision,
        values: data.values,
        imageUrl: data.imageUrl
      }
    });

    revalidatePath('/');
    return content;
  } catch (error) {
    console.error('Error updating about content:', error);
    throw new Error('Failed to update about content');
  }
}