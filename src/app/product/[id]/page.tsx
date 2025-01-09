import ProductForm from "@/components/product/ProductForm"
import { productService } from "@/services/product"

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const productId = (await params).id

    const getProduct = async (productId: string) => {
        const loadProduct = await productService.getById(productId)
        console.log(loadProduct, "loadProduct")

        return loadProduct
    }
    const product = await getProduct(productId)

    return <ProductForm />
}
