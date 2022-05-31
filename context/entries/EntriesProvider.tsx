import { FC, useReducer } from "react"
import { Entry } from "../../interfaces/entry";
import { v4 as uuidv4 } from 'uuid';

import {entriesReducer, EntriesContext} from  './';


export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'PENDIENTE: Description',
            status: 'pending',
            createdAt: Date.now()

        },
        {
            _id: uuidv4(),
            description: 'IN PROGRESS: Description 2',
            status: 'in-progress',
            createdAt: Date.now() - 100000,

        },
        {
            _id: uuidv4(),
            description: 'FINISHED: Description 3',
            status: 'finished',
            createdAt: Date.now() - 1000

        }
    ]
}

interface Props {
    children: React.ReactNode
}

export const EntriesProvider:FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

    const addEntry = (description: string) => {
        const newEntry:Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({type:"[Entry] - AddEntry", payload: newEntry})
    }

    return(
        <EntriesContext.Provider 
            value={{
                ...state,
                addEntry
            }}
        >
            {children}
        </EntriesContext.Provider>
    )
}