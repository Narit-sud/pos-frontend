import { OrderType } from "../types";

export const localOrder = {
    get: (): OrderType[] => {
        const storedOrders = localStorage.getItem("savedOrders");
        return storedOrders ? JSON.parse(storedOrders) : [];
    },

    set: (orders: OrderType[]): void => {
        localStorage.setItem("savedOrders", JSON.stringify(orders));
    },

    clear: (): void => {
        localStorage.setItem("savedOrders", JSON.stringify([]));
    },

    add: (newOrder: OrderType): void => {
        let currentOrders = localOrder.get();
        const updatedOrders = [
            ...currentOrders,
            {
                ...newOrder,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ];
        localOrder.set(updatedOrders);
    },

    remove: (uuid: string): void => {
        let currentOrders = localOrder.get();
        const updatedOrders = currentOrders.filter(
            (order) => order.uuid !== uuid,
        );
        localOrder.set(updatedOrders);
    },

    update: (updatedOrder: OrderType): void => {
        let currentOrders = localOrder.get();
        const updatedOrders = currentOrders.map((order) =>
            order.uuid === updatedOrder.uuid
                ? { ...updatedOrder, updatedAt: new Date().toISOString() }
                : order,
        );
        localOrder.set(updatedOrders);
    },
};
