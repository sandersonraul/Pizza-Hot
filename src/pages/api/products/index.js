import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req, res) {
  const { method } = req;
  if(method === "GET"){
    try{
      const products = await prisma.products.findMany()
      res.status(200).json(products)
    } catch(err) {
      res.status(500).json(err)
    }
  }
  
  if (method === "POST") {
    try {
      const { title, descr, img, price  } = req.body;

      const product = await prisma.products.create({
        data: {
          title,        
          descr,
          img,
          price,
        },
      });
      res.status(201).json({ product });
    } catch(err) {
      res.status(500).json(err)
    }
  }
} 