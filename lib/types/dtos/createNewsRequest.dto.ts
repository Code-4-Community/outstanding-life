import { z } from 'zod';

export const newsWriteSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export type NewsWrite = z.infer<typeof newsWriteSchema>;
