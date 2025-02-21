export type ProcurementItemType = {
    // use for store in productLog
    uuid: string; // for unique
    mainUUID: string; // for identify
    mainName: string; // for display
    variantUUID: string; // for unique
    variantName: string; // for display
    qty: number; // for calculate price, store in productLog
    price: number; // for display
    total: number; // for calculate price, store in productLog
    procurementUUID: string; // for reference in the productLog table
};
