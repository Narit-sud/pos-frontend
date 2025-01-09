"use client"
interface Props {
    product: {
        id: number
        name: string
        category: string
        price: number
        cost: number
        stock: number
    }
}
function ProductItem({ product }: Props) {
    return (
        <tr className="p-2">
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.cost}</td>
            <td>{product.stock}</td>
        </tr>
    )
}

export default ProductItem
