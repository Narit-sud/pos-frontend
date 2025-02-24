import { formatDate } from "../../../utils/formatDate";
import { ProcurementItemType } from "./ProcurementItemType";
import { v4 as uuidv4 } from "uuid";

export type ProcurementType = {
    uuid: string;
    supplierUUID: string;
    createdAt: string;
    updatedAt: string;
    isPaid: boolean;
    isReceived: boolean;
    billDate: string;
    procurementItems: ProcurementItemType[];
};

export function createProcurement(params: Partial<ProcurementType> = {}) {
    return {
        uuid: params.uuid || uuidv4(),
        supplierUUID: params.supplierUUID || "",
        createdAt: params.createdAt || "",
        updatedAt: params.updatedAt || "",
        isPaid: params.isPaid || false,
        isReceived: params.isReceived || false,
        billDate: params.billDate || formatDate(new Date()),
        procurementItems: params.procurementItems || [],
    };
}
