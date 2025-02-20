import { OrderType } from "../types/OrderType";

export function saveOrder(order: OrderType): void {
    const savedOrders = localStorage.getItem("savedOrder");
    const ordersArray = savedOrders ? JSON.parse(savedOrders) : [];
    ordersArray.push(order);
    localStorage.setItem("savedOrder", JSON.stringify(ordersArray));
}

export function removeSavedOrder(uuid: string): void {
    const savedOrders = localStorage.getItem("savedOrder");
    if (!savedOrders) return;

    const ordersArray = JSON.parse(savedOrders);
    const updatedOrders = ordersArray.filter(
        (order: any) => order.uuid !== uuid,
    );

    localStorage.setItem("savedOrder", JSON.stringify(updatedOrders));
}
