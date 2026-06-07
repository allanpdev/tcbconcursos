import {MercadoPagoConfig, Payment} from "mercadopago"

const client = new MercadoPagoConfig({accessToken: "TEST-6446439214734914-060620-5f2afc8a8b4f8275d3f58b73a9e98d69-31644788"})
const payment = new Payment(client)

export async function POST(req){
  try{
    const body = await req.json()
    const data = await payment.create({
      body: {
        ...body,
      },
      requestOptions: {
        idempotencyKey: crypto.randomUUID()
      }
    })
    return Response.json(data)
  } catch(err){
    console.log(err)
    return Response.json({error: 'Erro interno'}, {status: 500})
  }
}