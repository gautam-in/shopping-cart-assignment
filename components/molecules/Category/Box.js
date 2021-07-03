import HeadingH3 from "../../atoms/Heading/HeadingH3"; 
import TextP from '../../atoms/Text/TextP'
import Button from '../../atoms/Button/Button'
import {Container,LeftSection,RightSection} from  './styles'
import Image from '../../atoms/Image/Image'

function Box({data}){
    
    const {imageUrl, name, description, key , enabled} = data

    if(!enabled) return ''

    return(
        <Container>
            <LeftSection>
                { imageUrl?.length > 0 && (<Image src={imageUrl} alt={name} classname="product-cat" />) }
            </LeftSection>
            <RightSection>
                <HeadingH3>{data.name}</HeadingH3>
                <TextP>{description}</TextP>
                <Button type='button'>{`Explore ${key}`}</Button>
            </RightSection>
        </Container>
    )
  }

export default Box;