import { PrismaClient } from "../generated/prisma";

export const getLastestProducts = async () => {

    const prisma = new PrismaClient()
    const data= await prisma.product.findMany({
        take: 8,
    })
    return data;
}