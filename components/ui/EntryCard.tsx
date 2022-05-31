import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Entry } from '../../interfaces'



interface Props  {
    entry: Entry
}

export const EntryCard:FC<Props> = ({entry}) => {
  return (
    <Card sx={{marginBottom: 1}}>
        <CardActions>
            <CardContent>
                <Typography sx={{whiteSpace: 'pre-line'}} > {entry.description} </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent:'end', paddingRight: 2}}>
                <Typography variant='body2'>Hace 30 min</Typography>
            </CardActions>
        </CardActions>
    </Card>
  )
}