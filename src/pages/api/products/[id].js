import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req, res) {
  const { method, query: { id } } = req;
  if(method === "GET"){ 
    try {
      const product = await prisma.products.findFirst({
        where: {
           id: Number(id) 
        }
      })
      res.status(200).json(product)
    } catch(err) {
      res.status(500).json(err)
    }
  }
  
  if (method === "PUT") {
    try {
      const { title, descr, img, price  } = req.body;

      const product = await prisma.products.create({
        data: {
          title: title,        
          descr: descr,
          img: img,
          price: price,
        },
      });
      res.status(201).json({ product });
    } catch(err) {
      res.status(500).json(err)
    }
  }

  if (method === "DELETE") {
    try {
      const { title, descr, img, price  } = req.body;

      const product = await prisma.products.create({
        data: {
          title: title,        
          descr: descr,
          img: img,
          price: price,
        },
      });
      res.status(201).json({ product });
    } catch(err) {
      res.status(500).json(err)
    }
  }
} 