import Box from '../../molecules/Category/Box'

function Category({categories}){
    const listItems = categories.map((data) =>
        <Box key={data.id} data={data}/>
    );
    
    return (
        <>
            {listItems}
        </>    
    );
}

export default Category