import z from 'zod'

// Khai Báo Rule Form Input Validate
export const AccountRes = z
  .object({ data: z.object({ id: z.number(), name: z.string(), email: z.string() }), message: z.string() })
  .strict()
export type AccountResType = z.TypeOf<typeof AccountRes>
export const UpdateMeBody = z.object({
  name: z.string().trim().min(2).max(256)
})
export type UpdateMeBodyType = z.TypeOf<typeof UpdateMeBody>
