import {
    createContext,
    ReactNode,
    useState,
    useEffect,
    useContext,
} from "react";
import { ProcurementContextType } from "./types/ProcurementContextType";
import { ProcurementType } from "./types/ProcurementType";

export const ProcurementContext = createContext<
    ProcurementContextType | undefined
>(undefined);

type Props = {
    children: ReactNode;
};

export function ProcurementProvider({ children }: Props) {
    const [procurements, setProcurements] = useState<ProcurementType[]>([]);
    const [newProcure, setNewProcure] = useState<ProcurementType | null>(null);
    return (
        <ProcurementContext.Provider value={{ procurements }}>
            {children}
        </ProcurementContext.Provider>
    );
}

export function useProcurement() {
    const context = useContext(ProcurementContext);
    if (!context) {
        throw new Error(
            "useProcurement must be used within a ProcurementProvider",
        );
    }
    return context;
}
