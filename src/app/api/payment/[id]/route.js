import {MercadoPagoConfig, Payment} from 'mercadopago'

const client = new MercadoPagoConfig({accessToken: "APP_USR-6446439214734914-060620-25bf2d8c486be5b2190cdd86b40f2947-31644788"})
const payment = new Payment(client)

export async function GET(req, {params}){
  const {id} = await params
  const data = await payment.get({id})
  return Response.json({status: data.status})
}