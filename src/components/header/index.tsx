import vectorImg from '../../assets/shop.png';
import { useRoutes } from '../../hooks/useRoutes';
import { useMovies } from '../../modules/cart/context';
import { Cart, Container, Title } from './styles';

export function Header() {
   const { routes } = useRoutes();
   const { cartData } = useMovies();

   return (
      <Container>
         <Title onClick={() => routes.home()}> WeMovies </Title>
         <Cart onClick={() => {
            routes.cart();
         }}>
            <div className='content'>
               <p>Meu Carrinho</p>
               <span>{cartData?.valueProduct || 0} Itens</span>
            </div>
            <img src={vectorImg} alt='icon' />
         </Cart>
      </Container>
   );
}
