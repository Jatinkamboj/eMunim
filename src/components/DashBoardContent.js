import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dashboard from './Dashboard';

function DashBoardContent(props) {
  return (
    <>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <Typography paragraph>
          <Dashboard data={props.data} />
        </Typography>
        
      </Box>
    </>
  )
}

export default DashBoardContent