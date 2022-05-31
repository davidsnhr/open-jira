
import { Add, SaveAltOutlined } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { ChangeEvent, useContext, useState } from 'react'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'

export const NewEntry = () => {


    const [touched, setTouched] = useState(false);
    const [inputValue, setInputValue] = useState('')

    const {addEntry} = useContext(EntriesContext);
    const  {setIsAddingEntry, isAddingEntry} = useContext(UIContext)

    const handleInputValue= (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const onSave = () => {
        if(inputValue.length ===0) return;
        addEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    }
    return (
        <Box sx={{marginBottom: 2, paddingX: 2}}>
            {
                isAddingEntry ? (
                    <>
                        <TextField 
                            fullWidth
                            sx={{marginTop:2, marginBottom:1}}
                            placeholder='Nueva Entrada'
                            autoFocus
                            multiline
                            label='Nueva Entrada'
                            helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor'}
                            error={ inputValue.length <= 0 && touched}
                            onChange={handleInputValue}
                            onBlur={() => setTouched(true)}
                        />
                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                variant='text'
                                onClick={() => setIsAddingEntry(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant='outlined'
                                color='secondary'
                                endIcon={<SaveAltOutlined/>}
                                onClick={onSave}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Button
                        startIcon={<Add />}
                        fullWidth
                        variant='outlined'
                        onClick={() => setIsAddingEntry(true)}
                    >
                        Agregar Tarea
                    </Button>
                )
            }


        </Box>
    )
}
