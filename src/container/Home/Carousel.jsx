import React from 'react';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const processLeftMedia = (cardContentH5, cardContentSubtitle, image, buttonText) => {
    return (
        <>
            <CardMedia style={{ marginRight: '5%' }}>
                <img style={{ width: '60%',backgroundSize:'contain' }} src={image} alt={buttonText} />
            </CardMedia>
            <CardContent style={{ marginTop: '5%', paddingLeft: '2%' }}>
                <Typography component="h5" variant="h5">
                    {cardContentH5}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {cardContentSubtitle}
                </Typography>
                <Button variant="contained" color="secondary" style={{ textTransform: 'none', marginTop: '5%' }}>
                    {buttonText}
                </Button>
            </CardContent>
        </>
    );
}

const processRightMedia = (cardContentH5, cardContentSubtitle, image, buttonText) => {
    return (
        <>
            <CardContent style={{ marginTop: '5%', paddingLeft: '2%' }}>
                <Typography component="h5" variant="h5">
                    {cardContentH5}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {cardContentSubtitle}
                </Typography>
                <Button variant="contained" color="secondary" style={{ textTransform: 'none', marginTop: '5%' }}>
                    {buttonText}
                </Button>
            </CardContent>
            <CardMedia>
                <img style={{ width: '70%' }} src={image} alt={buttonText} />
            </CardMedia>
        </>
    );
}


const Carousel = ({ cardContentH5, cardContentSubtitle, image, mediaPosition, buttonText, lastCard }) => {
    return (
        <Container style={{ marginTop: '1%' }}>
            <Card style={{
                display: 'flex', marginBottom: '1%',
                boxShadow: 'none'
            }}>
                {mediaPosition % 2 !== 0
                    ? processLeftMedia(cardContentH5, cardContentSubtitle, image, buttonText)
                    : processRightMedia(cardContentH5, cardContentSubtitle, image, buttonText)
                }
            </Card >
            {!lastCard &&
                <div style={{
                    backgroundImage: "radial-gradient(at 48% 0, #9e9898 0%, #9e9898 0%, transparent 70%)",
                    margin: 'auto',
                    textAlign: 'center',
                    height: '8px',
                    width: '100%',
                }}></div>
            }
        </Container >
    );
}

export default Carousel;