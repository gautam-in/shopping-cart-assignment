import { render, screen } from '@testing-library/react';
import CategoryCard from"./CategoryCard"
const props = {
    "name": "Beverages",
    "key": "beverages",
    "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.\i",
    "enabled": true,
    "order": 3,
    "imageUrl": "/static/images/category/beverages.png",
    "id": "5b675e5e5936635728f9fc30"
  }
describe("Category Card Test", ()=>{
    test('check for category Cards Image', () => {
        render(<CategoryCard {...props}/>);
        const ImageElement = screen.getByRole("img");
        expect(ImageElement.alt).toContain(props.name);
      });
    test('check for category Cards heading', () => {
        render(<CategoryCard {...props}/>);
        const HeadingElement = screen.getByRole("heading");
        expect(HeadingElement).toHaveTextContent(props.name);
      });
      test('check for category Cards description', () => {
        render(<CategoryCard {...props}/>);
      const DescriptionElement = screen.getByText(props.description);
      expect(DescriptionElement).toBeInTheDocument();
      });
      test('check for category Cards button name', () => {
        render(<CategoryCard {...props}/>);
          const ButtonElement = screen.getByRole("button");
          expect(ButtonElement).toHaveTextContent("Explore "+ props.name);
      });
})
