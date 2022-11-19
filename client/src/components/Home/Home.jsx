import { Grid } from "@mui/material";
import React from "react";
import AddStudent from "../AddStudent/AddStudent";
import Students from "../Students/Students";

function Home() {
  return (
    <Grid
      container
      margin=" 100px auto"
      width="70%"
      columnSpacing={1}
      paddingRight={1}
      
    >
      <AddStudent />
      <Students />
    </Grid>
  );
}

export default Home;
