
import {
  Card,
  ContainerButton,
  ContainerImage,
  Description,
  Title,
  Value,
} from "./styles";
import cartImg from "../../../../assets/cart.png";
import { Button } from "../../../../components/button";


interface CardsProps {
  image: string;
  title: string;
  price: number;
  qtd: number;
}

export function Cards({ image, title, price, }: CardsProps) {

  return (
    <Card>
      <ContainerImage>
        <img src={image} alt="Movies" />
      </ContainerImage>
      <Description>
        <Title>{title}</Title>
        <Value>{new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(price)}</Value>
      </Description>
      <ContainerButton>
         <Button
            label="Adicionar ao carrinho"
            icon={<img src={cartImg} alt="cart" />}
            type="submit"
            width="100%"
         />
      </ContainerButton>
    </Card>
  );
}
