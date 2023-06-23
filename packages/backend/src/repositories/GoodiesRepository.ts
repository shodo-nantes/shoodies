import { PrismaClient } from '@prisma/client';

import { Goody } from 'types/goody';

const prisma = new PrismaClient();

export async function getGoodies(): Promise<Goody[]> {
    return await prisma.shoodies.findMany({
        orderBy: [{ name: 'asc' }],
    });
}
