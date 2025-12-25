import {getDB} from '@/lib/db'
import {NextResponse} from 'next/server'

export async function GET() {
    const db = await getDB();
    const [rows] = await db.query('SELECT * FROM notes ORDER BY created_at DESC');
    return NextResponse.json(rows);
}
export async function POST(req: Request){
    const db =  await getDB();
    const body = await req.json();
    const {title, content, tag} = body;
    await db.query('INSERT INTO notes (title, content, tag) VALUES (?, ?, ?)', [title, content, tag]);
    return NextResponse.json({message: 'Note created successfully'});
}