import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import useUsers from '../../hooks/useUsers';

export default function ChatUserComponent({id, }) {
    const {getUserById, userData} = useUsers()

    useEffect(() => {
        getUserById(id)
    }, [id])  
    if(!userData) return null
  return (
    <Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>
        <img src={userData.image.src} alt={userData.image.alt} style={{width: "50px",height: "50px", borderRadius: "50%"}} />
        <Typography variant="h5">{userData.name.first} {userData.name.last}</Typography>
    </Box>
  )
}
