import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req, res) {
  const { method, query: { id } } = req;
  if(method === "GET"){
    try{
      const order = await prisma.orders.findFirst({
        where:{
          id: Number(id) 
        }
      })
      res.status(200).json(order)
    } catch(err) {
      res.status(500).json(err)
    }
  }
  
  if (method === "PUT") {
  }

  if (method === "DELETE") {
  }
} 