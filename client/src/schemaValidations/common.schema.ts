import z from 'zod'

// Khai Báo Rule Form Input Validate
export const MessageRes = z.object({ message: z.string() }).strict()
export type MessageResType = z.TypeOf<typeof MessageRes>
