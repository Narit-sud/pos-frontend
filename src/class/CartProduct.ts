import Product from "./Product"

export default class CartProduct extends Product {
    product_id: number
    price: number
    qty: number
    total_price: number
    constructor(
        product_id: number,
        price: number,
        qty: number,
        total_price: number,
    ) {
        super(id, name, price, cost, stock, detail)
        this.product_id = product_id
        this.price = price
        this.qty = qty
        this.total_price = total_price
    }
}
