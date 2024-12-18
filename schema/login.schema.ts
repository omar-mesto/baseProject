import { z } from 'zod';
// const { t } = useI18n();
export const loginSchema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(8)
})

export type LoginDto = z.input<typeof loginSchema>
