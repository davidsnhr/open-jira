import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import React, { FC } from 'react'
import { SideBar, Navbar } from '../ui'


interface Props {
    title?: string,
    children?: React.ReactNode
}

export const Layout:FC<Props> = ({title = "Open Jira", children}) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar />
        <SideBar />

        <Box sx={{padding: "10px 20px" }}>
            {children}
        </Box>
    </Box>
  )
}
