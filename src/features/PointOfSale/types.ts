export interface CartItemType {
    uuid: string;
    variantUUID: string;
    mainName: string;
    variantName: string;
    qty: number;
    price: number;
    total: number;
    receiptUUID: string;
}

export interface OrderType {
    uuid: string;
    customerUUID: string;
    saleItems: CartItemType[];
    createdAt: string;
    updatedAt: string;
}

export interface CartState {
    items: CartItemType[];
    loadedFromUUID?: string; // Track which saved cart this was loaded from
    isModified: boolean; // Track if loaded cart was modified
}
