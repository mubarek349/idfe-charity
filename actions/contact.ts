'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getContactInfo() {
  try {
    const contact = await db.contactInfo.findFirst({
      where: { isActive: true },
      orderBy: { updatedAt: 'desc' }
    });
    return contact;
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return null;
  }
}

export async function createContactInfo(data: {
  address: string;
  phone: string;
  email: string;
  website?: string;
  socialMedia: Record<string, string>;
  mapUrl?: string;
}) {
  try {
    await db.contactInfo.updateMany({
      where: { isActive: true },
      data: { isActive: false }
    });

    const contact = await db.contactInfo.create({
      data: { ...data, isActive: true }
    });

    revalidatePath('/');
    return contact;
  } catch (error) {
    console.error('Error creating contact info:', error);
    throw new Error('Failed to create contact info');
  }
}

export async function updateContactInfo(data: {
  id: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  socialMedia: Record<string, string>;
  mapUrl?: string;
}) {
  try {
    const contact = await db.contactInfo.update({
      where: { id: data.id },
      data: {
        address: data.address,
        phone: data.phone,
        email: data.email,
        website: data.website,
        socialMedia: data.socialMedia,
        mapUrl: data.mapUrl
      }
    });

    revalidatePath('/');
    return contact;
  } catch (error) {
    console.error('Error updating contact info:', error);
    throw new Error('Failed to update contact info');
  }
}