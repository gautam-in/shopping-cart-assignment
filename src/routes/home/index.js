import CategoryList from '../../components/category-list';
const Home = () => {
    const categories = [
        {
            "name": "Beverages",
            "key": "beverages",
            "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
            "enabled": true,
            "order": 3,
            "imageUrl": "/static/images/category/beverages.png",
            "id": "5b675e5e5936635728f9fc30"
          },
    ]
  return (
    <div>
        <div className="home-carousel"></div>
        <CategoryList categories={categories} />
    </div>
  );
}

export default Home;
