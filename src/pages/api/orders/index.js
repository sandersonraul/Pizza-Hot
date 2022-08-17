import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req, res) {
  const { method } = req;
  if(method === "GET"){
    try{
      const orders = await prisma.orders.findMany()
      res.status(200).json(orders)
    } catch(err) {
      res.status(500).json(err)
    }
  }
  
  if (method === "POST") {
    try {
      const { customer, address, total } = req.body;

      const order = await prisma.orders.create({
        data: {
          customer,        
          address,
          total,
        },
      });
      res.status(201).json({ order });
    } catch(err) {
      res.status(500).json(err)
    }
  }
} 