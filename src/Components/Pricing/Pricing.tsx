import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './pricing.css'

interface pricingProps {
    Price: string,
    PackageTitle: String
}
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 345,
        minHeight: 200
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props: pricingProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
    <div className={'package'}>{props.PackageTitle}</div>
                <div className={'price'}> {props.Price}</div>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}
