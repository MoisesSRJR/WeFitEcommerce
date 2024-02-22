import { FaTrash } from 'react-icons/fa';
import { isMobile } from 'react-device-detect';
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
   ProductsMobile,
   ListMobile,
   Column,
   Row,
   SubTotal,
} from './styles';
import { Button } from '../../../../components/button';
import { CountButton } from '../../../../components/countButton';
import emptyImg from '../../../../assets/empty.png';
import { useMovies } from '../../context';
import { useRoutes } from '../../../../hooks/useRoutes';

export function TableCart() {
   const { moviesCart, RemoveProduct, cartData } = useMovies();
   const { routes } = useRoutes();

   return (
      <TableContainer>
         {moviesCart?.length === 0 ? (
            <EmptyCart>
               <p>Parece que não há nada por aqui :(</p>
               <img src={emptyImg} alt='Carrinho vazio' />
               <hr className='divider' />
               <Button
                  label='Voltar'
                  type='submit'
                  width='180px'
                  marginTop='32px'
                  onClick={() => {
                     routes.home();
                  }}
               />
            </EmptyCart>
         ) : (
            <>
               {!isMobile ? (
                  <>
                     <HeaderTable>
                        <span className='product'>Produto</span>
                        <span className='qtd'>qtd</span>
                        <span className='sub'>Subtotal</span>
                     </HeaderTable>
                     <Products>
                        {moviesCart?.map((item) => (
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
                                 <CountButton buttons={item} />
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
                                       if (item.id) {
                                          RemoveProduct(item.id);
                                       }
                                    }}
                                 />
                              </Trash>
                           </List>
                        ))}
                     </Products>
                  </>

               ) : (

                  <ProductsMobile>
                     {moviesCart?.map((item) => (
                        <ListMobile key={item.id}>
                           <Movie>
                              <img src={item.image} alt='movie' />
                           </Movie>
                           <Column>
                              <span className='titleMobile'>{item.title}</span>
                              <CountButton buttons={item} />
                           </Column>
                           <Column>
                              <Row>
                                 <span className='priceMobile'>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                 }).format(item.price)}</span>
                                 <FaTrash
                                    size={18}
                                    color='#009EDD'
                                    onClick={() => {
                                       if (item.id) {
                                          RemoveProduct(item.id);
                                       }
                                    }}
                                 />
                              </Row>
                              <SubTotal>
                                 <span className='subTotal'>Subtotal</span>
                                 <span className='priceMobile'>
                                    {new Intl.NumberFormat('pt-BR', {
                                       style: 'currency',
                                       currency: 'BRL',
                                    }).format(item.qtd * item.price)}
                                 </span>
                              </SubTotal>
                           </Column>
                        </ListMobile>
                     ))}
                  </ProductsMobile>
               )}

               <FinalOrder>
                  <Total>
                     <span>total</span>
                     <span className='value'>
                        {new Intl.NumberFormat('pt-BR', {
                           style: 'currency',
                           currency: 'BRL',
                        }).format(cartData?.valueTotal)}
                     </span>
                  </Total>
                  <Button
                     label='Finalizar pedido'
                     type='submit'
                     width={isMobile ? '100%' : '235px'}
                     onClick={() => {
                        routes.confirmation();
                        localStorage.clear();

                        window.location.reload();
                     }}
                  />
               </FinalOrder>
            </>

         )}

      </TableContainer>
   );
}
