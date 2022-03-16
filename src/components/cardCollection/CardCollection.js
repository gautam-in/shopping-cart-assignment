import CardItem from "../cardItem/CardItem";

const CardCollection = ({ categories }) => {
    return (
        <div>
            {
                categories.map((cat) => {
                    return cat.enabled && <CardItem cat={cat} key={cat.id}/>

                })
            }

        </div>

    )
}

export default CardCollection;