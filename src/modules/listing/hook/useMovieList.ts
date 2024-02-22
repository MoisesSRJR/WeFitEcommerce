import { useQuery, useQueryClient } from "react-query";
import { ProductsResponse } from "../types";
import { setupAPI } from "../../../commom/service";

export function useMovieList(searchTerm?: string) {
   const api = setupAPI();
   const queryClient = useQueryClient();

   const fetchMovies = async () => {
      const { data } = await api.get('/products');
      let filteredData = data;
      if (searchTerm) {
         const regex = new RegExp(searchTerm, 'i'); // Expressão regular case insensitive
         filteredData = data.filter((product: { title: string; }) => regex.test(product.title)); // Filtrando os resultados
      }
      return filteredData;
   };

   const { data: movies, isLoading, isError } = useQuery<ProductsResponse>(
      ["movie-list", searchTerm],
      fetchMovies,
      {
         cacheTime: 0,
         staleTime: Infinity,
         enabled: !queryClient.getQueryData("movie-list"),
      }
   );

   return { movies, isLoading, isError };
}

