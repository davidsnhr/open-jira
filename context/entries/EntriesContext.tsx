import { createContext } from "react";
import { Entry } from "../../interfaces/entry";



interface ContextProps {
    entries: Entry[]
    addEntry: (description: string) => void
    changeStatus: (entry: Entry) => void
}

export const EntriesContext = createContext({} as ContextProps)