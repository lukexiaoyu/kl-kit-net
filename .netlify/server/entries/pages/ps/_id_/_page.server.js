import { PrismaClient } from "@prisma/client";
const ps = new PrismaClient();
async function load({ params }) {
  const peo = await ps.peo.findUnique({
    where: {
      id: Number(params.id)
    }
  });
  return peo;
}
export {
  load
};
