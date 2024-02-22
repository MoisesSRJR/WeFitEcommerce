/*eslint-disable */
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { ContainerCountButton } from './styles';
import { Movies, useMovies } from '../../modules/cart/context';

interface CountButtonProps {
   buttons: Movies;
}

export function CountButton({ buttons }: CountButtonProps) {
   const { AddedItem, RemoveItem } = useMovies();

   return (
      <ContainerCountButton>
         <AiOutlineMinusCircle
            style={{ cursor: 'pointer' }}
            size={18}
            color='#009EDD'
            onClick={() => {
               buttons.qtd >= 1 && RemoveItem(buttons?.id ?? 0);
            }}
         />
         <div>{buttons.qtd}</div>
         <AiOutlinePlusCircle
            style={{ cursor: 'pointer' }}
            size={18}
            color='#009EDD'
            onClick={() => {
               AddedItem(buttons.id ?? 0);
            }}
         />
      </ContainerCountButton>
   );
}
