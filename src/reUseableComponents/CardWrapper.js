import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  // Button, Avatar, Icon
} from "@mui/material";
import "../index.css";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   rotatedCard: {
//     transform: "rotate(-5deg)",
//     transition: "transform 0.3s ease-in-out",
//   },
// }));

const CardWrapper = ({
  title,
  description,
  icon,
  emoji,
  width,
  body1Variant,
  className,
  openVacancies,
  openVacanciesOrder,
  color,
}) => {
  // const classes = useStyles();
  const [showActions, setShowActions] = React.useState(false);
  return (
    <>
      {!openVacancies && (
        <Card
          className={`${
            color === "#8f26bc" ? 'rotatedCard':''
          } doesThisCard ${className}`}
          sx={{
            minWidth: width ? width : 325,
            background: color,
            color: color === "#8f26bc" ? "white" : "black",
            borderRadius:'15px',
            border: 0
          }}
        >
          <CardContent>
            {emoji && (
              <h1 style={{ fontSize: "40px" }}>
                {emoji === "angry"
                  ? "😡"
                  : emoji === "laughing"
                  ? "😀"
                  : emoji === "shock"
                  ? "😳"
                  : emoji === "eyeUp"
                  ? "🤨"
                  : emoji === "sad"
                  ? "😔"
                  : emoji === "disgusted"
                  ? "😬"
                  : emoji}
              </h1>
            )}
            {/* <br /> */}
            <Typography variant={body1Variant ? "h5" : "h6"}>
              {title}
            </Typography>
            <Typography variant={body1Variant ? body1Variant : "body2"}>
              {description}
            </Typography>
          </CardContent>
        </Card>
      )}
      {openVacancies && (
        <Card
          sx={{ minHeight: 200, margin: 2 }}
          className={`hoverCard${openVacanciesOrder}`}
          onMouseEnter={() => setShowActions(true)}
          onMouseLeave={() => setShowActions(false)}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
          {showActions && (
            <CardActions>
              <button className="bg-black text-white rounded-full py-2 px-4">
                See Details
              </button>
            </CardActions>
          )}
        </Card>
      )}
    </>
  );
};

export default CardWrapper;
