'use client'
import DeleteProduct from '@/app/products/_components/delete-product'
import { Button } from '@/components/ui/button'
import { isClient } from '@/lib/http'
import { ProductListResType } from '@/schemaValidations/product.schema'
import Link from 'next/link'

export default function ProductEditButton({ product }: { product: ProductListResType['data'][0] }) {
  const isAuthenticated = isClient() && Boolean(localStorage.getItem('sessionToken'))
  if (!isAuthenticated) return null
  return (
    <div className='flex space-x-2 items-start'>
      <Link href={`/products/${product.id}/edit`}>
        <Button variant={'outline'}>Edit</Button>
      </Link>
      <DeleteProduct product={product} />
    </div>
  )
}
