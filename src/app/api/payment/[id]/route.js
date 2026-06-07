import {MercadoPagoConfig, Payment} from 'mercadopago'

const client = new MercadoPagoConfig({accessToken: "TEST-6446439214734914-060620-5f2afc8a8b4f8275d3f58b73a9e98d69-31644788"})
const payment = new Payment(client)

export async function GET(req, {params}){
  const {id} = await params
  const data = await payment.get({id})
  return Response.json({status: data.status})
}