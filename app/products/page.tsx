import ProductsClient from '@/components/products/ProductsClient'
import ProtectedRoute from '../(auth)/ProtectedRoute/page'


export default function ProductPage() {
  return (
    <div>
        <ProtectedRoute>

        <ProductsClient/>
        </ProtectedRoute>
    </div>
  )
}
