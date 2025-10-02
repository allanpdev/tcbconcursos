import { Analytics } from '@/libs/mongodb'

export async function GET() {
  try {
    // Buscar os 100 eventos mais recentes
    const events = await Analytics.find().sort({ createdAt: -1 }).limit(100)

    return new Response(JSON.stringify(events), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Erro ao buscar eventos:', error)
    return new Response(JSON.stringify({ error: 'Erro no servidor' }), {
      status: 500
    })
  }
}