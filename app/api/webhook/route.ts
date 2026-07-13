import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // PowerShellから送られてきたJSONデータを解析
    const data = await request.json();
    
    // ターミナル（コンソール）に受け取ったデータを表示
    console.log('Webhook受信成功:', data);
    console.log('GPS位置情報:', data.content);

    // 送信元（PowerShell）に正常終了のレスポンスを返す
    return NextResponse.json({ status: 'success', message: 'Data received' }, { status: 200 });
  } catch (error) {
    console.error('エラー発生:', error);
    return NextResponse.json({ status: 'error', message: 'Invalid JSON' }, { status: 400 });
  }
}
