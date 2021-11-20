const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
(async () => {
  console.log(
    await prisma.user.create({
      data: {
        name: "andrew",
        email: "e@gmail.com",
      },
    })
  );
})().catch((error) => console.error(error));
