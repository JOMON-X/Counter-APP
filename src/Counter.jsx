import styled from "@emotion/styled";
import { Button, Grid, Stack, Alert } from "@mui/material";
import React, { useState } from "react";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Counter() {
  const message = document.getElementById("alert");
  let [counter, setcounter] = useState(0);

  const handledecrement = () => {
    setcounter(--counter);
  };

  const handleincrement = () => {
    setcounter(++counter);
  };

  const handledisable = () => {
    if (counter === 0) {
        toast.error('✋Cant Go Below ZERO ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }
  };

  return (
    <>
      <StyledCount>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item>
            <Stack spacing={2}>
              <div className="countertop">
                <h1>{counter}</h1>
              </div>
              <Stack direction={"row"} spacing={2} justifyContent={"center"}>
                <div onClick={handledisable}>
                  <Button
                    variant="contained"
                    onClick={handledecrement}
                    disabled={counter === 0}
                  >
                    -
                  </Button>
                </div>
                <Button variant="contained" onClick={handleincrement}>
                  +
                </Button>
                <ToastContainer />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </StyledCount>
    </>
  );
}

const StyledCount = styled.div`
  .countertop {
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 5px;
    width: 150px;
    box-shadow: inset 0 0 10px black;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
