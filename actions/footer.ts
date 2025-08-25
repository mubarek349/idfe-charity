'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getFooterContent() {
  try {
    const content = await db.footerContent.findFirst({
      where: { isActive: true },
      orderBy: { updatedAt: 'desc' }
    });
    return content;
  } catch (error) {
    console.error('Error fetching footer content:', error);
    return null;
  }
}

export async function createFooterContent(data: {
  description: string;
  quickLinks: Array<{ title: string; url: string }>;
  socialLinks: Array<{ platform: string; url: string; icon: string }>;
  copyright: string;
}) {
  try {
    await db.footerContent.updateMany({
      where: { isActive: true },
      data: { isActive: false }
    });

    const content = await db.footerContent.create({
      data: { ...data, isActive: true }
    });

    revalidatePath('/');
    return content;
  } catch (error) {
    console.error('Error creating footer content:', error);
    throw new Error('Failed to create footer content');
  }
}

export async function updateFooterContent(data: {
  id: string;
  description: string;
  quickLinks: Array<{ title: string; url: string }>;
  socialLinks: Array<{ platform: string; url: string; icon: string }>;
  copyright: string;
}) {
  try {
    const content = await db.footerContent.update({
      where: { id: data.id },
      data: {
        description: data.description,
        quickLinks: data.quickLinks,
        socialLinks: data.socialLinks,
        copyright: data.copyright
      }
    });

    revalidatePath('/');
    return content;
  } catch (error) {
    console.error('Error updating footer content:', error);
    throw new Error('Failed to update footer content');
  }
}