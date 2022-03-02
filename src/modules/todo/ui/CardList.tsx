import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";

export const CardList = () => {
  return (
    <Grid>
      <List>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Ваши задачи
        </Typography>
        <ListItem disablePadding>
          <Checkbox checked={true} onChange={(event) => console.log("df")} />
          <ListItemText primary="Вшм" />
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
        <ListItem disablePadding>
          <Checkbox checked={true} onChange={(event) => console.log("df")} />
          <ListItemText primary="Spam" />
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </List>
    </Grid>
  );
};
