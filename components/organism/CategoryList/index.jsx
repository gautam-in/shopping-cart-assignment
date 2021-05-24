import CategoryItem from '../../molecules/CategoryItem';


const CategoryList = ({categoryData}) => {
   
   return (
    categoryData?.length && categoryData.map((categoryItem, index) => {
        return <CategoryItem key={categoryItem.key} item={categoryItem} index={index} />
     })
   )
}
export default CategoryList;