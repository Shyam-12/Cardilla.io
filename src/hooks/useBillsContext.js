import { BillsContext } from "../context/BillsContext";
import { useContext } from "react";

export const useBillsContext = () => {
    const context = useContext(BillsContext);

    if (!context) {
        throw Error("useBillsContext must be used within a BillsContextProvider");
    }

    return context;
}