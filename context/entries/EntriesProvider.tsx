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

    const addEntry = async (description: string) => {
        try {
            const {data} = await entriesApi.post<Entry>('/entries', {description});
            
            dispatch({type:"[Entry] - AddEntry", payload: data})
        } catch (error) {
            
        }
    }

    const changeStatus = async({_id, description, status}: Entry) => {

        try {
            const {data} = await entriesApi.put<Entry>(`/entries/${_id}`, {description, status}) 
            dispatch({type:"[Entry] - changeStatusEntry", payload: data})
        } catch (error) {
            console.log(error);
        }
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