
import { SaveAltOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const NewEntry = () => {
  return (
    <Box display='flex' justifyContent='space-between'>
        <Button
            variant='text'
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
  )
}
