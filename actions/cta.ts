'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getCTAContent() {
  try {
    const content = await db.cTAContent.findFirst({
      where: { isActive: true },
      orderBy: { updatedAt: 'desc' }
    });
    return content;
  } catch (error) {
    console.error('Error fetching CTA content:', error);
    return null;
  }
}

export async function createCTAContent(data: {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
  textColor?: string;
}) {
  try {
    await db.cTAContent.updateMany({
      where: { isActive: true },
      data: { isActive: false }
    });

    const content = await db.cTAContent.create({
      data: { ...data, isActive: true }
    });

    revalidatePath('/');
    return content;
  } catch (error) {
    console.error('Error creating CTA content:', error);
    throw new Error('Failed to create CTA content');
  }
}

export async function updateCTAContent(data: {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
  textColor?: string;
}) {
  try {
    const content = await db.cTAContent.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        buttonText: data.buttonText,
        buttonLink: data.buttonLink,
        bgColor: data.bgColor,
        textColor: data.textColor
      }
    });

    revalidatePath('/');
    return content;
  } catch (error) {
    console.error('Error updating CTA content:', error);
    throw new Error('Failed to update CTA content');
  }
}