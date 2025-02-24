import { v4 as uuidv4 } from "uuid";
export type ProcurementItemType = {
    // use for store in productLog
    uuid: string; // for unique
    mainUUID: string; // for identify
    mainName: string; // for display
    variantUUID: string; // for unique
    variantName: string; // for display
    qty: number; // for calculate price, store in productLog
    cost: number; // for display
    total: number; // for calculate price, store in productLog
    procurementUUID: string; // for reference in the productLog table
};

export function createProcurementItem(
    params: Partial<ProcurementItemType> = {},
): ProcurementItemType {
    return {
        uuid: params.uuid || uuidv4(),
        mainUUID: params.mainUUID || "",
        mainName: params.mainName || "",
        variantUUID: params.variantUUID || "",
        variantName: params.variantName || "",
        qty: params.qty || 0,
        cost: params.cost || 0,
        total: params.total || 0,
        procurementUUID: params.procurementUUID || "",
    };
}
