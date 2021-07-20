import React from 'react'
import HorizontalListView from '../../../components/horizontalListView';

export default function CategoryList() {


    const cardsData = [
        { id: 1, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200' },
        { id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/200' },
        { id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201' },
        { id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201' },
        { id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: 'https://unsplash.it/202/200' },
        { id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199' },
        { id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl: 'https://unsplash.it/199/199' },
        { id: 8, title: 'CARD 8', content: 'Steven Rogers', imgUrl: 'https://unsplash.it/199/200' },
        { id: 9, title: 'CARD 9', content: 'Bruce Banner', imgUrl: 'https://unsplash.it/200/198' },
        { id: 10, title: 'CARD 10', content: 'Vincent Strange', imgUrl: 'https://unsplash.it/198/199' },
    ]

    return (
        <HorizontalListView title="Featured Categories">
            {
                cardsData.map((card) => (
                    <Card title={card.title}
                        content={card.content}
                        imgUrl={card.imgUrl} />
                ))
            }
        </HorizontalListView>
    );
}

const Card = (props) => (
    <div className="card">
        <img src={props.imgUrl}
            alt={props.alt || 'Image'} />
        <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    </div>
);