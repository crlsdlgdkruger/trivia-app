import { Typography } from "@mui/material";
import "./TitleH5.css";

export const TitleH5 = (props) => {
  return (
    <Typography variant="h5" className="title-h5">{props.children}</Typography>
  );
};