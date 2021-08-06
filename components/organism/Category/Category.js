import Box from '../../molecules/Category/Box'
import Slider from '../Slider/Slider'

function Category({categories,slider}){
    console.log("slider",slider)
    const listItems = categories.map((data,index) =>
        <Box key={data.id} data={data} index={index}/>
    );
    
    return (
        <>  
            <Slider slideImages = {slider} />
            {listItems}
        </>    
    );
}

export default Category