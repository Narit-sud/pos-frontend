export interface Product {
    id: number | null
    name: string
    category: number | null
    price: number | null
    cost: number | null
    stock: number | null
    detail: string
}

export const emptyProduct: Product = {
    id: NaN,
    name: "",
    category: NaN,
    price: NaN,
    cost: NaN,
    stock: NaN,
    detail: "",
}
