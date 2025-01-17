import http from '@/lib/http'
import { AccountResType, UpdateMeBodyType } from '@/schemaValidations/account.schema'

// khai Báo Method Call API & Config Reponse Trả Về Khi Gọi API
const accountApiRequest = {
  me: (sessionToken: string) =>
    http.get<AccountResType>('account/me', { headers: { Authorization: `Bearer ${sessionToken}` } }),
  meClient: () => http.get<AccountResType>('account/me'),
  updateMe: (body: UpdateMeBodyType) => http.put<AccountResType>('account/me', body)
}

export default accountApiRequest
