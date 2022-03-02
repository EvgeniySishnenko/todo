import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
export const CardHead = () => {
  return (
    <Grid>
      <Grid>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          02 марта 2022 г.
        </Typography>
      </Grid>
      <Grid container direction="row" justifyContent="flex-end">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          2 задач
        </Typography>
      </Grid>
    </Grid>
  );
};
