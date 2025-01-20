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
    id: null,
    name: "",
    category: null,
    price: null,
    cost: null,
    stock: null,
    detail: "",
}
