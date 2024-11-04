import z from 'zod';

export const formLoginSchema = z.object({
  email: z.string({ required_error: 'Campo obrigatório' }).email('Informe um e-mail válido'),
  password: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' }),
});

export type IFormLoginSchema = z.infer<typeof formLoginSchema>;
