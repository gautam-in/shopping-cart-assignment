
import "./category-sidebar.scss"
import SidebarItem from "./SidebarItem/SidebarItem"

const CategorySidebar =({categoriesData, seletcedCategory,categorySelected })=>{
    return (
        <ul className="categorySidebar">
            {categoriesData.map(cat=>{
                return (
                    <SidebarItem
                         key={cat.id}
                         categoryName={cat.name}
                         categorySelected={() => categorySelected(cat.id)}
                         id={cat.id}
                         seletcedCategory={
                         seletcedCategory === cat.id ? true : false
                    }
          />
                )
            })

            }
        </ul>
    )
}

export default CategorySidebar