import { Box} from '@mui/material'
import React from 'react'
// import PersonalityForm from './PersonalityForm'
// import Books from '../components/Books'
import NavBar from "../components/NavBar";
// import Welcome from '../components/Welcome';
import Login from "./Login"
import SignUp from './Signup';
function Home() {
  return (
    <Box>
      <NavBar />
    <Box
     display={"flex"}
    >
      {/* <SignUp/> */}
      <Login/>
      {/* <PersonalityForm  /> */}
      {/* <Books /> */}
      {/* <Welcome/> */}
    </Box>
    </Box>
  )
}

export default Home
