export default class Product {
    id: number
    name: string
    price: number
    cost: number
    stock: number
    detail: string
    constructor(
        id: number,
        name: string,
        price: number,
        cost: number,
        stock: number,
        detail: string,
    ) {
        this.id = id
        this.name = name
        this.price = price
        this.cost = cost
        this.stock = stock
        this.detail = detail
    }
}
