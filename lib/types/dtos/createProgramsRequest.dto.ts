import { z } from 'zod';

export const programsWriteSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  base64EncodedImage: z.string().min(1),
});

export type ProgramsWrite = z.infer<typeof programsWriteSchema>;
