import { SaleItemClass } from "../classes/SaleItemClass";

export const localCurrentCart = {
    get: (): SaleItemClass[] => {
        const storedCart = localStorage.getItem("currentCart");
        return storedCart ? JSON.parse(storedCart) : [];
    },
    set: (cart: SaleItemClass[]): void => {
        localStorage.setItem("currentCart", JSON.stringify(cart));
    },
    clear: (): void => {
        localStorage.setItem("currentCart", JSON.stringify([]));
    },
    add: (newItem: SaleItemClass): void => {
        let currentCart = localCurrentCart.get();
        let updatedCart = [];

        const existedItem = currentCart.find(
            (item) => item.uuid === newItem.uuid,
        );
        console.log("existedItem", existedItem);

        if (existedItem) {
            updatedCart = currentCart.map((item) =>
                item.uuid === newItem.uuid
                    ? {
                          ...item,
                          qty: Number(Number(item.qty) + Number(newItem.qty)),
                          price:
                              (Number(item.total) + Number(newItem.total)) /
                              (Number(item.qty) + Number(newItem.qty)),
                          total: Number(item.total) + Number(newItem.total),
                      }
                    : item,
            );
        } else {
            updatedCart = [...currentCart, newItem];
        }

        localCurrentCart.set(updatedCart);
    },
    remove: (uuid: string): void => {
        let currentCart = localCurrentCart.get();
        currentCart.filter((item) => item.uuid !== uuid);
        localCurrentCart.set(currentCart);
    },
};
