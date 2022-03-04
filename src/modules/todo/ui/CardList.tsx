import { memo } from "react";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardTodoItem } from "./CardTodoItem";

export const CardList = memo(() => {
  return (
    <Grid>
      <List>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Ваши задачи
        </Typography>
        <CardTodoItem />
      </List>
    </Grid>
  );
});
