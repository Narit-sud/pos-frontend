import { v4 as genUUID } from "uuid";

export class CategoryClass {
    index: number;
    uuid: string;
    name: string;
    detail: string;
    constructor(
        index: number = 0,
        uuid: string = genUUID(),
        name: string = "",
        detail: string = "",
    ) {
        this.index = index;
        this.uuid = uuid;
        this.name = name;
        this.detail = detail;
    }
}
