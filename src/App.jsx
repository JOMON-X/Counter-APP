import React, { useState } from "react";
import {  Button, Container, Grid, Stack } from "@mui/material";
import Counter from "./Counter";


export default function App() {
  
//   let [counter, setcounter] = useState(0);
  
//  const handleincrement=()=> {
//   setcounter(++counter);
//  }

 

//  const handledecrement=()=>{
//   setcounter(--counter);
//   if (counter === 0) {
//     alert("cant go below zero");
  

//   }
//  }

 
  

  return (
    <>



    <Counter></Counter>
      {/* <Container fixed>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={4}>
            <Stack justifyContent="center"
            alignItems="center">
           
              <h1>{counter}</h1>
              <Stack direction='row' spacing={2}>
                <Button 
                  variant="contained"
                  onClick={handledecrement} disabled={counter===0}>-</Button>
                <Button
                  variant="contained"
                  onClick={handleincrement}>+</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
}
