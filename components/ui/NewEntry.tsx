
import { Add, SaveAltOutlined } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { ChangeEvent, useState } from 'react'

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false);
    const [touched, setTouched] = useState(false);
    const [inputValue, setInputValue] = useState('')

    const handleInputValue= (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    return (
        <Box sx={{marginBottom: 2, paddingX: 2}}>
            {
                isAdding ? (
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
                                onClick={() => setIsAdding(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant='outlined'
                                color='secondary'
                                endIcon={<SaveAltOutlined/>}
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
                        onClick={() => setIsAdding(true)}
                    >
                        Agregar Tarea
                    </Button>
                )
            }


        </Box>
    )
}
