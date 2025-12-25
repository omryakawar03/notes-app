import {getDB} from '@/lib/db'
import {NextResponse} from 'next/server'

export async function GET() {
    try {
        const db = await getDB();
        const [rows] = await db.query('SELECT * FROM notes ORDER BY created_at DESC');
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({error: 'Failed to fetch notes'}, {status: 500});
    }
}
export async function POST(req: Request) {
    try {
        const db = await getDB();
        const body = await req.json();
        const {title, content, tag} = body;
        
        if (!title || !content) {
            return NextResponse.json({error: 'Title and content are required'}, {status: 400});
        }
        
        await db.query('INSERT INTO notes (title, content, tag) VALUES (?, ?, ?)', [title, content, tag]);
        return NextResponse.json({message: 'Note created successfully'}, {status: 201});
    } catch (error) {
        return NextResponse.json({error: 'Failed to create note'}, {status: 500});
    }
}