import { render } from "@testing-library/react";
import HeroButton from "./HeroButton";

it('should render HeroButton successfully', ()=>{
    const { getAllByTestId } = render(<HeroButton />);
    const heroButton = getAllByTestId('hero-button');
    expect(heroButton).toBeTruthy();
})