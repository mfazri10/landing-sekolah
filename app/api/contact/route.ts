import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { Contact } from '@/lib/types';

// Fungsi untuk mengambil kontak
export async function GET() {
    try {
        const { rows } = await pool.query<Contact>('SELECT * FROM contacts');
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Error retrieving contacts:', error);
        return NextResponse.json({ error: 'Failed to retrieve contacts' }, { status: 500 });
    }
}

// Fungsi untuk menambahkan kontak
export async function POST(request: Request) {
    const { firstName, lastName, email, phone, subject, message }: Contact = await request.json();
    
    try {
        const result = await pool.query<Contact>(
            'INSERT INTO contact (firstName, lastName, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', 
            [firstName, lastName, email, phone, subject, message]
        );
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error creating contact:', error);
        return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
    }
}