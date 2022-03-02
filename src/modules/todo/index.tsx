import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHead } from "./ui/CardHead";
import { CardInput } from "./ui/CardInput";
import { CardList } from "./ui/CardList";
import Box from "@mui/material/Box";

export const Todo = () => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Card sx={{ minWidth: "100%" }}>
        <CardContent>
          <CardHead />
          <CardInput />
          <CardList />
        </CardContent>
      </Card>
    </Box>
  );
};
