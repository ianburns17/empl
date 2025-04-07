import { NextResponse } from 'next/server';
import pool from '@/app/db/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM employee');
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, id } = body;
    
    const result = await pool.query(
      'INSERT INTO employee (name, id) VALUES ($1, $2) RETURNING *',
      [name, id]
    );
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create employee' }, { status: 500 });
  }
} 