import { NextResponse } from 'next/server';
import pool from '@/app/db/db';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    await pool.query('DELETE FROM employee WHERE id = $1', [id]);
    return NextResponse.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete employee' }, { status: 500 });
  }
} 