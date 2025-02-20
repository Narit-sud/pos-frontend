import { CartItemType } from "../types";

export const localCart = {
    get: (): CartItemType[] => {
        const storedCart = localStorage.getItem("currentCart");
        return storedCart ? JSON.parse(storedCart) : [];
    },
    set: (cart: CartItemType[]): void => {
        localStorage.setItem("currentCart", JSON.stringify(cart));
    },
    clear: (): void => {
        localStorage.setItem("currentCart", JSON.stringify([]));
    },
    add: (newItem: CartItemType): void => {
        let currentCart = localCart.get();
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

        localCart.set(updatedCart);
    },
    remove: (uuid: string): void => {
        let currentCart = localCart.get();
        currentCart.filter((item) => item.uuid !== uuid);
        localCart.set(currentCart);
    },
};
