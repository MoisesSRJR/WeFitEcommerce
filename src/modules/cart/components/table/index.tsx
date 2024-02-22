import { FaTrash } from 'react-icons/fa';

import {
   Count,
   FinalOrder,
   HeaderTable,
   List,
   Movie,
   PriceTotal,
   Products,
   Names,
   Total,
   Trash,
   TableContainer,
   EmptyCart,
} from './styles';
import { Button } from '../../../../components/button';
import { CountButton } from '../../../../components/countButton';
import emptyImg from '../../../../assets/empty.png';

// Interface do mock
interface MovieItem {
   id: number;
   image: string;
   title: string;
   price: number;
   qtd: number;
}

// Componente de tabela
export function TableCart() {
   // Dados mockados
   const moviesCart: MovieItem[] = [
      /* {
         id: 1,
         image: 'https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg',
         title: 'Nome do Filme',
         price: 10.99,
         qtd: 2,
      },
      {
         id: 2,
         image: 'https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg',
         title: 'Outro Filme',
         price: 9.99,
         qtd: 1,
      }, */
   ];

   return (
      <TableContainer>
         {moviesCart.length === 0 ? (
            <EmptyCart>
               <span>Parece que não há nada por aqui :(</span>
               <img src={emptyImg} alt='Carrinho vazio'/>
               <hr className='divider'/>
               <Button
                  label='Voltar'
                  type='submit'
                  width='180px'
                  marginTop='32px'
                  onClick={() => {
                     alert('Pedido finalizado');
               }}
            />
            </EmptyCart>
         ) : (
            <>
         <HeaderTable>
            <span className='product'>Produto</span>
            <span className='qtd'>qtd</span>
            <span className='sub'>Subtotal</span>
         </HeaderTable>
         <Products>
            {moviesCart.map((item) => (
               <List key={item.id}>
                  <Movie>
                     <img src={item.image} alt='movie' />
                  </Movie>
                  <Names>
                     <span className='name'>{item.title}</span>
                     <span className='price'>
                        {new Intl.NumberFormat('pt-BR', {
                           style: 'currency',
                           currency: 'BRL',
                        }).format(item.price)}
                     </span>
                  </Names>
                  <Count>
                     <CountButton buttons={item.title} />
                  </Count>
                  <PriceTotal>
                     <span>
                        {' '}
                        {new Intl.NumberFormat('pt-BR', {
                           style: 'currency',
                           currency: 'BRL',
                        }).format(item.qtd * item.price)}
                     </span>
                  </PriceTotal>
                  <Trash>
                     <FaTrash
                        size={18}
                        color='#009EDD'
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                           alert('Item removido do carrinho');
                        }}
                     />
                  </Trash>
               </List>
            ))}
         </Products>
         <FinalOrder>

            <Total>
               <span>total</span>
               <span className='value'>
                  {new Intl.NumberFormat('pt-BR', {
                     style: 'currency',
                     currency: 'BRL',
                  }).format(
                     moviesCart.reduce(
                        (acc, curr) => acc + curr.qtd * curr.price,
                        0
                     )
                  )}
               </span>
            </Total>
            <Button
               label='Finalizar pedido'
               type='submit'
               width='235px'
               onClick={() => {
                  alert('Pedido finalizado');
               }}
            />
         </FinalOrder>
            </>

         )}

      </TableContainer>
   );
}
