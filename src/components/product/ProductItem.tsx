import { Product } from "../../interfaces/Product"

type Props = {
    product: Product
    category: string
    handleClick: () => void
}
export default function ProductItem({ product, category, handleClick }: Props) {
    return (
        <tr className="hover" onClick={handleClick}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{category}</td>
            <td>{product.cost}</td>
            <td>{product.stock}</td>
            <td>{product.detail}</td>
        </tr>
    )
}
