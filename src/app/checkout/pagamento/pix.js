"use server"
import {MercadoPagoConfig, Order} from "mercadopago"

const client = new MercadoPagoConfig({accessToken: "APP_USR-1336850415817601-052912-ab84c48c6becff0a86c903ea2ff21fb1-3435685970", options: {timeout: 5000}})
const order = new Order(client)

export default async function gerarPix(){
  const body = {
    type: "online",
    processing_mode: "automatic",
    total_amount: "100.00",
    external_reference: "ext_ref_1234",
    payer: {
      email: "test@testuser.com",
    },
    transactions: {
      payments: [
        {
          amount: "100.00",
          payment_method: {
            id: "pix",
            type: "bank_transfer",
          },
          expiration_time: "P1D",
        },
      ],
    },

  }
  const requestOptions = {idempotencyKey: crypto.randomUUID()}
  const response = await order.create({body, requestOptions})
  return response
}