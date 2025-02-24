import { v4 as uuidv4 } from "uuid";

export type SupplierType = {
    uuid: string;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    detail: string;
    createdAt: string;
    updatedAt: string;
};

export function createSupplier(
    params: Partial<SupplierType> = {},
): SupplierType {
    return {
        uuid: params.uuid ?? uuidv4(),
        name: params.name ?? "",
        surname: params.surname ?? "",
        phoneNumber: params.phoneNumber ?? "",
        email: params.email ?? "",
        detail: params.detail ?? "",
        createdAt: params.createdAt ?? "now()",
        updatedAt: params.updatedAt ?? "now()",
    };
}
