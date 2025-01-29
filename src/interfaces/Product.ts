export interface Product {
    id: number | null;
    name: string;
    category: number;
    price: number;
    cost: number;
    stock: number;
    detail: string;
}

export interface CartProduct extends Product {
    qty: number;
    totalPrice: number;
}

export const emptyProduct: Product = {
    id: null,
    name: "",
    category: 0,
    price: 0,
    cost: 0,
    stock: 0,
    detail: "",
};

export const emptyCartProduct: CartProduct = {
    ...emptyProduct,
    qty: 1,
    totalPrice: 0,
};

export interface ProductMain {
    index: number;
    uuid: string;
    name: string;
    category: string;
    detail: string;
    variantCount: number;
    type: string;
    createdAt: string;
    updatedAt: string;
}
