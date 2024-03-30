import { PrismaClient } from "@prisma/client";
const ps = new PrismaClient();
const actions = {
  add_name: async ({ request }) => {
    const data = await request.formData();
    const new_name = data.get("name");
    const new_age = Number(data.get("age"));
    const new_sex = data.get("sex");
    await ps.peo.create({
      data: {
        name: new_name,
        age: new_age,
        sex: new_sex
      }
    });
  }
};
export {
  actions
};
