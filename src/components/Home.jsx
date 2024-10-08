import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CardPizza from "./CardPizza";
import Header from './Header'
import { pizzas } from '../data/pizzas';

const Home = () => {
    return(
        <>
        <Header />
        <Container>
            <Row className='mt-4'>   
                {pizzas.map(pizza => <CardPizza pizza = {pizza} key={pizza}/>)}
            </Row>
        </Container>
        </>
    )
}


export default Home

