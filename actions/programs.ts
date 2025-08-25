'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getPrograms() {
  try {
    const programs = await db.program.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    });
    return programs;
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

export async function createProgram(data: {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  status?: string;
  targetGroup?: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
}) {
  try {
    const program = await db.program.create({
      data: { ...data, isActive: true }
    });

    revalidatePath('/');
    return program;
  } catch (error) {
    console.error('Error creating program:', error);
    throw new Error('Failed to create program');
  }
}

export async function updateProgram(data: {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  status?: string;
  targetGroup?: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
}) {
  try {
    const program = await db.program.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        category: data.category,
        imageUrl: data.imageUrl,
        status: data.status,
        targetGroup: data.targetGroup,
        location: data.location,
        startDate: data.startDate,
        endDate: data.endDate
      }
    });

    revalidatePath('/');
    return program;
  } catch (error) {
    console.error('Error updating program:', error);
    throw new Error('Failed to update program');
  }
}

export async function deleteProgram(id: string) {
  try {
    await db.program.update({
      where: { id },
      data: { isActive: false }
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting program:', error);
    throw new Error('Failed to delete program');
  }
}