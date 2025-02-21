import { ProcurementItemType } from "./ProcurementItemType";
import { v4 as uuidv4 } from "uuid";

export type ProcurementType = {
    uuid: string;
    supplierUUID: string;
    createdAt: string;
    updatedAt: string;
    procurementItems: ProcurementItemType[];
};

export function createProcurement({
    uuid,
    supplierUUID,
    createdAt,
    updatedAt,
    procurementItems,
}: ProcurementType): ProcurementType {
    return {
        uuid: uuid || uuidv4(),
        supplierUUID: supplierUUID || "",
        createdAt: createdAt || "",
        updatedAt: updatedAt || "",
        procurementItems: procurementItems || [],
    };
}
