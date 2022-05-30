import { InboxOutlined, MailOutline } from '@mui/icons-material'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import React, { FC, useContext } from 'react'
import { UIContext } from '../../context/ui';

export const SideBar: FC = () => {

 const menu = ['Inbox', 'Starred', 'Send Email', 'Drafts'];
 const bottomMenu = ['All mail', 'Trash', 'Spam']; 

 const { sidemenuOpen, closeSideMenu } = useContext(UIContext)
 return (
     <Drawer
        anchor='left'
        open={sidemenuOpen}
        onClose={closeSideMenu}
     >
        <Box sx={{width: 250}}>
            <List>
                {menu.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxOutlined/> : <MailOutline />}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {bottomMenu.map((text, index) => (
                    <ListItem key={text}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxOutlined/> : <MailOutline />}    
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
  )
}