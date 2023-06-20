import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
}

export default async function getListings(params: IListingsParams) {
  const { userId } = params;

  let query: any = {};

  if (userId) {
    query.userId = userId;
  }

  try {
    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });
    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}
