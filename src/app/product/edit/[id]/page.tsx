import ProductForm from "@/components/product/ProductForm"
export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params

    return (
        <div>
            <p>Edit product id:{id}</p>
            <ProductForm productId={id} />
        </div>
    )
}
