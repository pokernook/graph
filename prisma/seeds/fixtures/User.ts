import { PrismaClient, UserCreateInput } from "nexus-plugin-prisma/client";

const passwordHash = // Translates to 'password'
  "$argon2id$v=19$m=4096,t=3,p=1$awIn+BOIcEF8KhDWVuUBPQ$f6VLaW4X0AmAnBMvdsnFssUjERdPAbpUC4UmrU2AoSk";

const users: UserCreateInput[] = [
  { id: "1", email: "test@email.com", passwordHash },
  { id: "2", email: "cowbell@email.com", passwordHash },
];

export const seedUser = async (prisma: PrismaClient): Promise<void> => {
  try {
    await Promise.all(users.map((user) => prisma.user.create({ data: user })));
    console.info(`✅ User (${users.length})`);
  } catch (e) {
    console.error(e.message);
  }
};