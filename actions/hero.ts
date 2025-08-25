'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getHeroContent() {
  try {
    const content = await db.heroContent.findFirst({
      where: { isActive: true },
      orderBy: { updatedAt: 'desc' }
    });
    return content;
  } catch (error) {
    console.error('Error fetching hero content:', error);
    return null;
  }
}

export async function createHeroContent(data: {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl?: string;
}) {
  try {
    await db.heroContent.updateMany({
      where: { isActive: true },
      data: { isActive: false }
    });

    const content = await db.heroContent.create({
      data: { ...data, isActive: true }
    });

    revalidatePath('/');
    return content;
  } catch (error) {
    console.error('Error creating hero content:', error);
    throw new Error('Failed to create hero content');
  }
}

export async function updateHeroContent(data: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl?: string;
}) {
  try {
    const content = await db.heroContent.update({
      where: { id: data.id },
      data: {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        buttonText: data.buttonText,
        buttonLink: data.buttonLink,
        imageUrl: data.imageUrl
      }
    });

    revalidatePath('/');
    return content;
  } catch (error) {
    console.error('Error updating hero content:', error);
    throw new Error('Failed to update hero content');
  }
}