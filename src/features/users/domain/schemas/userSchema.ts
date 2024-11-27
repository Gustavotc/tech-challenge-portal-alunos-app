import z from 'zod';

const USER_ROLE_TYPES = ['DISCENTE', 'DOCENTE'] as const;

export const userSchema = z.object({
  name: z.string({ required_error: 'Campo obrigatório' }).min(1, { message: 'Campo obrigatório' }),
  email: z.string({ required_error: 'Campo obrigatório' }).email('Informe um e-mail válido'),
  password: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' }),
  role: z.enum(USER_ROLE_TYPES, { message: 'Valor inválido', required_error: 'Campo obrigatório' }),
});

export type IUserSchema = z.infer<typeof userSchema>;
