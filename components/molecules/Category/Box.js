import HeadingH3 from "../../atoms/Heading/HeadingH3"; 
import TextP from '../../atoms/Text/TextP'
import Button from '../../atoms/Button/Button'
import {Container,LeftSection,RightSection} from  './styles'
import Image from '../../atoms/Image/Image'
import {isEven} from '../../../lib/lib'

function Box({data,index}){
    
    const {imageUrl, name, description, key , enabled} = data

    console.log("index is",index)

    const flexDirection = isEven(index+1) ? 'row' : 'row-reverse' 

    if(!enabled) return ''

    return(
        <Container flexDirection={flexDirection}>
            <LeftSection>
                { imageUrl?.length > 0 && (<Image src={imageUrl} alt={name} classname="product-cat" />) }
            </LeftSection>
            <RightSection>
                <HeadingH3>{data.name}</HeadingH3>
                <TextP>{description}</TextP>
                <Button type='button' cname='variant_category'>{`Explore ${key}`}</Button>
            </RightSection>
        </Container>
    )
  }

export default Box;