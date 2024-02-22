import vectorImg from '../../assets/shop.png';
import { Cart, Container, Title } from './styles';

export function Header() {

   return (
      <Container>
         <Title>WeMovies</Title>
         <Cart>
            <div className='content'>
               <p>Meu Carrinho</p>
               <span>0 Itens</span>
            </div>
            <img src={vectorImg} alt='icon' />
         </Cart>
      </Container>
   );
}
