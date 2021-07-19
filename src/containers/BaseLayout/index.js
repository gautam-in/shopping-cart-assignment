import { Header } from '../../components'
import { Container } from './styled'

export default function BaseLayout({children}) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}
