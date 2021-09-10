import CategoryCard from '../categoryCard/categoryCard'
const Category = ({ allCategory=[] }) => {
    return <>
        {
            allCategory.filter(item=>item.enabled).map((ele,ind) => (
                <CategoryCard key={ele.id} CategoryData={ele} direction={ind%2 === 0 ? 'rtl':''} />
            ))
        }
    </>
}
export default Category;