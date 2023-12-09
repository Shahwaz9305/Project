import React from 'react'
import { Typography, Box, Stack, Button } from "@mui/material";
function Welcome() {
  return (
    <Box
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    >

    
    <Box
    width={"30vw"}
    height={"80vh"}
    display={"flex"}
    flexDirection={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    paddingLeft={"2rem"}
    paddingRight={"2rem"}
    sx={{
      backgroundColor: "#FF4262",

    }}
  >
    <Stack alignItems={"center"} direction={"column"} spacing={5}>
      <Typography variant="h2">Hello, Friend!</Typography>
      <Typography variant="body2">
        Enter your personal details and start Journey with us
      </Typography>

    </Stack>
  </Box>
  </Box>
  )
}

export default Welcome
