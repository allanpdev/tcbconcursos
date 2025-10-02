import {connectToDatabase, Analytics} from '@/libs/mongodb'

export async function POST(request) {
  try {
    await connectToDatabase()
    const data = await request.json()

    // 🛑 CAPTURA O IP AQUI
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      request.ip ||                                    
      'IP não identificado'

    const event = new Analytics({ ...data, ip_address: ip })
    await event.save()

    console.log('Evento registrado:', { ...data, ip })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Erro ao processar evento:', error)
    return new Response(JSON.stringify({ error: 'Erro no servidor' }), { status: 500 })
  }
}