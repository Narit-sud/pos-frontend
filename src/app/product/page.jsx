"use client"
import { useState, useEffect } from "react"
import { productService } from "@/services/product"
import ProductItem from "@/components/product/ProductItem"

export default function Page() {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [productList, setProductList] = useState([])
    const getProducts = async () => {
        setIsLoading(true)
        const products = await productService.getAll()
        if (products.length === 0) {
            setIsLoading(false)
            setIsError(true)
            return
        }
        setProductList(products)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className="flex flex-col">
            {isLoading || <p>Loading</p>}
            <p className="text-xl font-bold">Product page</p>
            <table className="m-2 w-[100vw] divide-y border p-2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Cost</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product) => {
                        return (
                            <ProductItem key={product.id} product={product} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
