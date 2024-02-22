/*eslint-disable */
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { ContainerCountButton } from './styles';

interface CountButtonProps {
  buttons: string;
}

export function CountButton({ buttons }: CountButtonProps) {

  return (
    <ContainerCountButton>
      <AiOutlineMinusCircle
        style={{ cursor: 'pointer' }}
        size={18}
        color='#009EDD'
        onClick={() => {
          alert('Removido do carrinho');
        }}
      />
      <div>{buttons}</div>
      <AiOutlinePlusCircle
        style={{ cursor: 'pointer' }}
        size={18}
        color='#009EDD'
        onClick={() => {
          alert('Adicionado ao carrinho');
        }}
      />
    </ContainerCountButton>
  );
}
