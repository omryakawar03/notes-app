import {getDB} from '@/lib/db';
import {NextResponse} from 'next/server';

export async function PUT(req:Request, {params}:any){
const id = params.id;
const body = await req.json();
const db = await getDB();
const {title, content, tag} = body;
await db.query('UPDATE notes SET title = ?, content = ?, tag = ? WHERE id = ?', [title, content, tag, id]);
return NextResponse.json({message: 'Note updated successfully'});
}
export async function DELETE(req:Request, {params}:any){
  const db = await getDB();
    const id = params.id;
    await db.query('DELETE FROM notes WHERE id = ?', [id]);
    return NextResponse.json({message: 'Note deleted successfully'});
}