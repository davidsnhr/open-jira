import { EntriesState } from "."



type EntriesActionType = 
| {type: '[Entries] - Action Name'}
| {type: ''}


export const entriesReducer = (state: EntriesState , action: EntriesActionType) => {
    switch(action.type) {
        default: 
            return state
    }
}

