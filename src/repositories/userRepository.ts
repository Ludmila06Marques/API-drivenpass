import { prisma } from "../dbStrategy/db.js";
import { CreateUserSchema } from "../services/userService.js";


export async function findUserByEmail(email:string){

    return prisma.user.findUnique({where:{email}})

}
export async function findById(id: number) {
  return prisma.user.findUnique({
    where: { id }
  });
}
export async function insertUser(user:CreateUserSchema){

    return prisma.user.create({data:user})

}
