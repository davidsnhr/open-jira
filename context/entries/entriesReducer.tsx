import { EntriesState } from "."
import { Entry } from "../../interfaces"



type EntriesActionType = 
| {type: '[Entry] - AddEntry', payload:Entry }
| {type: ''}


export const entriesReducer = (state: EntriesState , action: EntriesActionType) => {
    switch(action.type) {
        case '[Entry] - AddEntry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        default: 
            return state
    }
}

