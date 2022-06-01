import { EntriesState } from "."
import { Entry } from "../../interfaces"



type EntriesActionType = 
| {type: '[Entry] - AddEntry', payload:Entry }
| {type: '[Entry] - changeStatusEntry', payload:Entry }
| {type: ''}


export const entriesReducer = (state: EntriesState , action: EntriesActionType) => {
    switch(action.type) {
        case '[Entry] - AddEntry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case '[Entry] - changeStatusEntry':
            console.log(state.entries);
            return {
                ...state,
                entries: state.entries.map((entry) => {
                    if(entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry
                })
            }
        default: 
            return state
    }
}

