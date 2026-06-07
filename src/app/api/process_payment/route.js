import {MercadoPagoConfig, Payment} from "mercadopago"

const client = new MercadoPagoConfig({accessToken: "APP_USR-6446439214734914-060620-25bf2d8c486be5b2190cdd86b40f2947-31644788"})
const payment = new Payment(client)

export async function POST(req){
  try{
    const body = await req.json()
    console.log(body)
    const data = await payment.create({
      body: {
        ...body,
      },
      requestOptions: {
        idempotencyKey: crypto.randomUUID()
      }
    })
    console.log(data)
    return Response.json(data)
  } catch(err){
    console.log(err)
    return Response.json({error: 'Erro interno'}, {status: 500})
  }
}