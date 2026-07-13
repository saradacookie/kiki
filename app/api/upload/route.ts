import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const arrayBuffer = await request.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    process.stdout.write(buffer);
    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('アップロードエラー:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
