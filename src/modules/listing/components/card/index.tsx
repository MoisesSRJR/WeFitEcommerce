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
import { useMovies } from "../../../cart/context";
import { useEffect, useState } from "react";

interface CardsProps {
   image: string;
   title: string;
   price: number;
   id?: number;
   qtd?: number;
   onClick?: () => void;
}

export function Cards({ image, title, price, onClick, id }: CardsProps) {
   const { moviesCart } = useMovies();
   const [totalItemsById, setTotalItemsById] = useState<number>(0);

   useEffect(() => {
      const storedCart = localStorage.getItem('WefitMovies');
      if (storedCart) {
         const parsedCart = JSON.parse(storedCart);
         const totalItems = parsedCart.reduce((total: number, item: any) => {
            if (item.id === id) {
               return total + item.qtd;
            }
            return total;
         }, 0);
         setTotalItemsById(totalItems);
      }
   }, [id, moviesCart]);

   return (
      <Card >
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
               label={moviesCart.some((item) => item.id === id) ? 'Item adicionado' : 'Adicionar ao carrinho'}
               icon={<img src={cartImg} alt="cart" />}
               item={totalItemsById}
               type="submit"
               width="100%"
               onClick={onClick}
               backgroundColor={moviesCart.some((item) => item.id === id) ? "#039B00" : "#009EDD"}
            />
         </ContainerButton>
      </Card>
   );
}
