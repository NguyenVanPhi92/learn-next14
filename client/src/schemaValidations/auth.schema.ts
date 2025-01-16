import z from 'zod'

// khai báo các rule validate form
export const RegisterBody = z
  .object({
    name: z.string().trim().min(2).max(256),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100)
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({ code: 'custom', message: 'Mật khẩu không khớp', path: ['confirmPassword'] })
    }
  })
// lấy ra type của form
export type RegisterBodyType = z.TypeOf<typeof RegisterBody>
export const RegisterRes = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({ id: z.number(), name: z.string(), email: z.string() })
  }),
  message: z.string()
})
// lấy ra type của form
export type RegisterResType = z.TypeOf<typeof RegisterRes>
export const LoginBody = z.object({ email: z.string().email(), password: z.string().min(6).max(100) }).strict()
// lấy ra type của form
export type LoginBodyType = z.TypeOf<typeof LoginBody>
export const LoginRes = RegisterRes
// lấy ra type của form
export type LoginResType = z.TypeOf<typeof LoginRes>
export const SlideSessionBody = z.object({}).strict()
// lấy ra type của form
export type SlideSessionBodyType = z.TypeOf<typeof SlideSessionBody>
export const SlideSessionRes = RegisterRes
// lấy ra type của form
export type SlideSessionResType = z.TypeOf<typeof SlideSessionRes>
