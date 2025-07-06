import { PrismaClient } from "../generated/prisma";
import { convertToPlainObject } from "../utils";

export const getLastestProducts = async () => {

    const prisma = new PrismaClient()
    const data= await prisma.product.findMany({
        take: 8,
        orderBy: {
            createdAt: 'desc',
        },
    })
    return convertToPlainObject(data);
}