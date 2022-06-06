import { FC, useEffect, useReducer } from "react"
import { Entry } from "../../interfaces/entry";
import { v4 as uuidv4 } from 'uuid';

import {entriesReducer, EntriesContext} from  './';
import { entriesApi } from "../../apis";


export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: []
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

    const changeStatus = (entry: Entry) => {
        dispatch({type:"[Entry] - changeStatusEntry", payload: entry})
    }

    const refreshEntries = async() => {
        const {data} = await entriesApi.get<Entry[]>('/entries');
        dispatch({type:"[Entry] - RefreshData", payload: data})
    }

    useEffect(() => {
        refreshEntries();
    }, [])
    

    return(
        <EntriesContext.Provider 
            value={{
                ...state,
                addEntry,
                changeStatus
            }}
        >
            {children}
        </EntriesContext.Provider>
    )
}