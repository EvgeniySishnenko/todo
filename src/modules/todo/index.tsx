import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardHead } from "./ui/CardHead";
import { CardInput } from "./ui/CardInput";

export const Todo = () => {
  return (
    <Card sx={{ minWidth: "100%" }}>
      <CardContent>
        <CardHead />
        <CardInput />
        <CardList />
      </CardContent>
    </Card>
  );
};
