import Box from '../../molecules/Category/Box'

function Category({categories}){
    const listItems = categories.map((data,index) =>
        <Box key={data.id} data={data} index={index}/>
    );
    
    return (
        <>
            {listItems}
        </>    
    );
}

export default Category