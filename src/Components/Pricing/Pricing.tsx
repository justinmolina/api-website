import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import "./pricing.css";
import styled from "styled-components";
import Img3 from '../img3/Img3Component'

interface pricingProps {
  Price: string;
  PackageTitle: String;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    minHeight: 200,
    backdropFilter: 'blur(5px)',
},
  media: {
    height: 140,
  },
});

const Title = styled.div`
  font-size: 25px;
  padding: 5% 0 0 5%;
  font-weight: 200;
  margin: auto;
  text-align: center;
`

export default function MediaCard(props: pricingProps) {
  const classes = useStyles();
  const { PackageTitle, Price } = props;
  return (
    <Card style={{backdropFilter: "blur(6px)", backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className={classes.root}>
      <CardActionArea>
        <Title>{PackageTitle}</Title>
        <div> {Price}</div>
      </CardActionArea>
      <CardActions>
        {/*        <Button size="small" color="primary">*/}
        {/*            Share*/}
        {/*</Button>*/}
        {/*        <Button size="small" color="primary">*/}
        {/*            Learn More*/}
        {/*</Button>*/}
      </CardActions>
    </Card>
  );
}
