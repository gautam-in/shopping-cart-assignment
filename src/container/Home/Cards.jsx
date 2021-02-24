import React from 'react';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button';
import './Cards.css'

class Cards extends React.Component {
    constructor(props) {
        super(props);
    }

    processLeftMedia = (cardContentH5, cardContentSubtitle, image, buttonText) => {
        return (
            <div className="left-content">
                <div>
                    <img id="left-img" src={image} alt={buttonText} />
                </div>
                <div className="content">
                    <div className="para">
                        <p className="card-title">
                            <strong>{cardContentH5}</strong>
                        </p>
                        <p id="desc">
                            {cardContentSubtitle}
                        </p>
                    </div>
                    <div className="btn-div">
                        <Button
                            id="btn-left"
                            onClick={() => this.props.onClick(this.props.id)}
                            variant="contained"
                            color="secondary"
                        >
                            {`Explore ${buttonText}`}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    processRightMedia = (cardContentH5, cardContentSubtitle, image, buttonText) => {
        return (
            <div className="right-content">
                <div>
                    <div className="para">
                        <p className="card-title">
                            <strong>{cardContentH5}</strong>
                        </p>
                        <p id="desc">
                            {cardContentSubtitle}
                        </p>
                    </div>
                    <div className="btn-div">
                        <Button
                            id="btn-right"
                            onClick={() => this.props.onClick(this.props.id)}
                            variant="contained"
                            color="secondary"
                        >
                            {`Explore ${buttonText}`}
                        </Button>
                    </div>
                </div>
                <div>
                    <img id="right-img" src={image} alt={buttonText} />
                </div>
            </div>
        );
    }

    categoryCard = (cardContentH5, cardContentSubtitle, image, mediaPosition, buttonText, lastCard) => {
        return (
            <Container style={{ marginTop: '1%' }}>
                <Card style={{
                    display: 'flex', marginBottom: '1%',
                    boxShadow: 'none'
                }}>
                    {mediaPosition % 2 !== 0
                        ? this.processLeftMedia(cardContentH5, cardContentSubtitle, image, buttonText)
                        : this.processRightMedia(cardContentH5, cardContentSubtitle, image, buttonText)
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
    render() {
        const { cardContentH5, cardContentSubtitle, image, mediaPosition, buttonText, lastCard, id } = this.props
        return (
            <div>
                {this.categoryCard(cardContentH5, cardContentSubtitle, image, mediaPosition, buttonText, lastCard)}
            </div>
        )
    }
}

export default Cards;