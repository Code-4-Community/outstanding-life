import { z } from 'zod';

export const eventWriteSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  link: z.string().min(1),
  eventStart: z.date(),
  eventEnd: z.date()
});

export type EventWrite = z.infer<typeof eventWriteSchema>;