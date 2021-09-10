import { withRouter } from 'react-router-dom'
import './categoryCard.scss'

const Category = ({ CategoryData, direction, history }) => {
    const goTo = (link) => {
        history.push(`products?type=${CategoryData.id}`)
    }
    return <div className={`cat-card d-flex flex-row flex-column-xs justify-content-center-xs align-items-center-xs ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
        <img src={CategoryData.imageUrl} className='banner-img mb-20-xs' alt="test" />
        <div className='d-flex flex-column justify-content-center align-items-center flex-grow'>
            <h1 className='title'>{CategoryData.name}</h1>
            <span className='sub-title'>{CategoryData.description}</span>
            <button onClick={goTo} className='action'>Explore {CategoryData.key}</button>
        </div>
    </div>
}
export default withRouter(Category);