import z from 'zod';

export const formRegisterSchema = z
  .object({
    name: z
      .string({ required_error: 'Campo obrigatório' })
      .min(1, { message: 'Campo obrigatório' }),
    email: z.string({ required_error: 'Campo obrigatório' }).email('Informe um e-mail válido'),
    password: z
      .string({ required_error: 'Campo obrigatório' })
      .min(1, { message: 'Campo obrigatório' }),
    confirmPassword: z
      .string({ required_error: 'Campo obrigatório' })
      .min(1, { message: 'Campo obrigatório' }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
      });
    }
  });

export type IFormRegisterSchema = z.infer<typeof formRegisterSchema>;
