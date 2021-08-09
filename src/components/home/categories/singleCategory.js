import { makeStyles } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ButtonWithText } from "../../common/button"

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      height: "250px",
      padding: "20px",
      marginBottom: "10px",
      "&:hover": {
        backgroundColor: "#FFFFFF",
      },
      "&:focus": {
        backgroundColor: "#FFFFFF",
      },
      boxShadow: "0px 8px 11px 0px #00000014",
    },
    media: {
      height: "200px",
      width: "300px",
    },
    cardAction: {
      display: "flex",
      justifyContent: "flex-start",
      height: "250px",
    },
    cardContent: {
      width: `calc(100% - 300px)`,
      height: "100%",
    },
    cardHeading: {
      fontSize: "30px",
      fontWeight: 700,
      fontStyle: "normal",
      display: "flex",
      justifyContent: "center",
      lineHeight: "80px",
    },
    cardDescription: {
      fontStyle: "normal",
      fontSize: "18px",
      fontWeight: 600,
      display: "flex",
      justifyContent: "center",
      wordWrap: "break-word",
      wordBreak: "break-all",
      height: "80px",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
    },
  }));
  

const  SingleCategory = (props) =>  {
    const classes = useStyles()

  

            return (
              <React.Fragment>
                <Card key={props.data.name} className={classes.root}>
                  <CardActionArea className={classes.cardAction}>
                    <CardMedia
                      className={classes.media}
                      image={props.data.imageUrl}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography className={classes.cardHeading}>
                        {props.data.name}
                      </Typography>
                      <Typography className={classes.cardDescription}>
                        {props.data.description}
                      </Typography>
                      <div className={classes.buttonContainer}>
                        <ButtonWithText
                          dispText={`explore ${props.data.key}`}
                          color="#FFFFFF"
                          backgroundColor="#d90166"
                          borderColor="#d90166"
                          borderRadius="1px"
                          height="40px"
                          fontSize="15px"
                        />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </React.Fragment>
            );

}

export default SingleCategory;
