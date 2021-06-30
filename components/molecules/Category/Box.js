import HeadingH3 from "../../atoms/Heading/HeadingH3"; 
import TextP from '../../atoms/Text/TextP'
import Button from '../../atoms/Button/Button'
import {Container,LeftSection,RightSection} from  './styles'
import Image from 'next/image'

function Box({data}){
    return(
        <Container>
            <LeftSection>
                { data?.imageUrl?.length > 0 && (<Image src={data.imageUrl} alt={data.name} width="350" height="200"/>) }
            </LeftSection>
            <RightSection>
                <HeadingH3>{data.name}</HeadingH3>
                <TextP>{data.description}</TextP>
                <Button type='button'>{`Explore ${data.key}`}</Button>
            </RightSection>
        </Container>
    )
  }

export default Box;