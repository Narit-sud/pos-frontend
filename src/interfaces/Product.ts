export interface ProductUpdate {
    id: number
    name: string
    category: number
    price: number
    cost: number
    stock: number
    detail: string
}

export interface ProductCreate {
    name: string
    category: number
    price: number
    cost: number
    stock: number
    detail: string
}
