import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req, res) {
  const { method } = req;
  if(method === "GET"){
    try{
      const users = await prisma.users.findMany()
      res.status(200).json(users)
    } catch(err) {
      res.status(500).json(err)
    }
  }
  
  if (method === "POST") {
    try {
      const { name, email, image } = req.body;

      const user = await prisma.users.create({
        data: {
          name,        
          email,
          image,
        },
      });
      res.status(201).json({ user });
    } catch(err) {
      res.status(500).json(err)
    }
  }
}

export async function verifyUser(email){
  const user = await prisma.users.findFirst({
    where: {
      email
    }
  });
  return user? true: false
}