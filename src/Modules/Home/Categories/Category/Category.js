import React, { useContext } from "react";
import { Card, CardContent, Typography, CardActions, Button  } from '@material-ui/core';

import { ActiveContext } from "../../../../Library/context";
import baseHelper from "../../../../Library/helper";

import classes from "./Category.module.scss";

const Category = props => {
  const { category, index } = props;
  const { history } = useContext(ActiveContext);

  const { key, name, description, imageUrl, id } = category;
  const imagePath = baseHelper.getImagePath(imageUrl);

  return (
    <Card className={classes.Card}>
      <CardContent>
        <div className={(index && classes.FloatingLeftImg) || classes.FloatingRightImg} >
          <img src={imagePath} alt={name} className={classes.Image} />
        </div>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <CardActions>
          <Button variant="contained" color="secondary"
            onClick={() => history.push("/product", { id } )}
          >
            {`Explore ${key}`}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default Category;
