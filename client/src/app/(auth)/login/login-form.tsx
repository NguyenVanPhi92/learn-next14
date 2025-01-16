'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginBody, LoginBodyType } from '@/schemaValidations/auth.schema'
import { useToast } from '@/components/ui/use-toast'
import authApiRequest from '@/apiRequests/auth'
import { useRouter } from 'next/navigation'
import { handleErrorApi } from '@/lib/utils'
import { useState } from 'react'
import { useAppContext } from '@/app/app-provider'

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const { setUser } = useAppContext()
  const { toast } = useToast()
  const router = useRouter()
  // khai báo form value dùng useForm trong react hook form
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody), // khai báo các rule validate form và react hook form
    defaultValues: { email: '', password: '' } // khai báo file value default
  })
  // 2. Define a submit handler.
  async function onSubmit(values: LoginBodyType) {
    console.log('value form: ', values)
    if (loading) return
    setLoading(true)
    try {
      const result = await authApiRequest.login(values)
      await authApiRequest.auth({ sessionToken: result.payload.data.token, expiresAt: result.payload.data.expiresAt })
      toast({ description: result.payload.message })
      setUser(result.payload.data.account)
      router.push('/')
      router.refresh()
    } catch (error: any) {
      handleErrorApi({ error, setError: form.setError })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      {/* đưa validate vào form input */}
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 max-w-[600px] flex-shrink-0 w-full' noValidate>
        <FormField
          control={form.control} // khai báo control field
          name='email' // khai báo name định danh cho field
          // render các properties vào input file
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='!mt-8 w-full'>
          Đăng nhập
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
