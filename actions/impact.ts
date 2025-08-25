'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getImpactStats() {
  try {
    const stats = await db.impactStat.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    });
    return stats;
  } catch (error) {
    console.error('Error fetching impact stats:', error);
    return [];
  }
}

export async function createImpactStat(data: {
  title: string;
  value: string;
  description?: string;
  icon?: string;
  order?: number;
}) {
  try {
    const stat = await db.impactStat.create({
      data: {
        ...data,
        order: data.order || 0,
        isActive: true
      }
    });

    revalidatePath('/');
    return stat;
  } catch (error) {
    console.error('Error creating impact stat:', error);
    throw new Error('Failed to create impact stat');
  }
}

export async function updateImpactStat(data: {
  id: string;
  title: string;
  value: string;
  description?: string;
  icon?: string;
  order?: number;
}) {
  try {
    const stat = await db.impactStat.update({
      where: { id: data.id },
      data: {
        title: data.title,
        value: data.value,
        description: data.description,
        icon: data.icon,
        order: data.order || 0
      }
    });

    revalidatePath('/');
    return stat;
  } catch (error) {
    console.error('Error updating impact stat:', error);
    throw new Error('Failed to update impact stat');
  }
}

export async function deleteImpactStat(id: string) {
  try {
    await db.impactStat.update({
      where: { id },
      data: { isActive: false }
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting impact stat:', error);
    throw new Error('Failed to delete impact stat');
  }
}