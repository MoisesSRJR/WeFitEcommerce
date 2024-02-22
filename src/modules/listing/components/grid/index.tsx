import { useState, useEffect } from 'react';
import { useMovies } from "../../../cart/context";
import { useMovieList } from "../../hook/useMovieList";
import { Cards } from "../card";
import Search from "../search";
import { ContainerGrid } from "./styles";
import { Loading } from '../../../../components/loading';

export function FieldSeat() {
   const { AddedProduct } = useMovies();
   const [searchTerm, setSearchTerm] = useState('');
   const [isLoading, setIsLoading] = useState(true); 
   const { movies } = useMovieList(searchTerm);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timeout);
   }, []);

   return (
      <section>
         <Search
            placeholder="Search for movies"
            onSearch={setSearchTerm}
         />

         {isLoading ? (
            <Loading />
         ) : (
            <ContainerGrid>
               {movies?.map((product) => (
                  <Cards
                     key={product.id}
                     title={product.title}
                     price={product.price}
                     image={product.image}
                     id={product.id}
                     onClick={() => AddedProduct({ ...product, qtd: 1 })}
                  />
               ))}
            </ContainerGrid>
         )}
      </section>
   );
}
