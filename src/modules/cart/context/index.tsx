import React, {
   createContext,
   useContext,
   useMemo,
   useState,
} from 'react';

interface MoviesProviderProps {
   children: React.ReactNode;
}

export interface Movies {
   id?: number;
   title: string;
   price: number;
   image: string;
   qtd: number;
}

export interface CartDataProps {
   valueTotal: number;
   valueProduct: number;
}

interface MoviesContextData {
   AddedProduct(movieProduct: Movies): void;
   RemoveProduct(id: number): void;
   cartData: CartDataProps;
   moviesCart: Movies[];
   RemoveItem(id: number): void;
   AddedItem(id: number): void;
}

const moviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps) {

   const [moviesCart, setMoviesCart] = useState<Movies[]>(() => {
      const product = localStorage.getItem('WefitMovies');
      if (product) {
         return JSON.parse(product);
      }
      return [] as Movies[];
   });

   const [cartData, setCartData] = useState<CartDataProps>(() => {
      const total = localStorage.getItem('Wefit');
      if (total) {
         return JSON.parse(total);
      }
      return { valueTotal: 0, valueProduct: 0 };
   });

   function AddedProduct(movieProduct: Movies) {
      if (moviesCart.some((item) => item.id === movieProduct.id)) {
         AddedItem(movieProduct.id!);
         return;
      }

      const updatedCart = [...moviesCart, { ...movieProduct, qtd: 1 }];
      const newValueTotal = updatedCart.reduce((acc, item) => acc + (item.price * item.qtd), 0);

      localStorage.setItem('WefitMovies', JSON.stringify(updatedCart));
      setMoviesCart(updatedCart);

      localStorage.setItem('Wefit', JSON.stringify({
         valueTotal: newValueTotal,
         valueProduct: updatedCart.length,
      }));
      setCartData({
         valueTotal: newValueTotal,
         valueProduct: updatedCart.length,
      });
   }

   function RemoveProduct(id: number) {
      const removeValue = moviesCart.find(item => item.id === id)?.price || 0;
      const updatedCart = moviesCart.filter(item => item.id !== id);
      const removeItem = moviesCart.find(item => item.id === id);
      const removeQuantity = removeItem ? removeItem.qtd : 0;
      const newValueTotal = cartData.valueTotal - (removeValue * removeQuantity);

      localStorage.setItem('WefitMovies', JSON.stringify(updatedCart));
      setMoviesCart(updatedCart);

      localStorage.setItem('Wefit', JSON.stringify({
         valueTotal: newValueTotal,
         valueProduct: updatedCart.length,
      }));
      setCartData({
         valueTotal: newValueTotal,
         valueProduct: updatedCart.length,
      });
   }

   function RemoveItem(id: number) {
      const updatedCart = moviesCart.map(item => {
         if (item.id === id && item.qtd > 0) {
            return { ...item, qtd: item.qtd - 1 };
         }
         return item;
      }).filter(item => item.qtd > 0);

      const newValueTotal = updatedCart.reduce((acc, item) => acc + (item.price * item.qtd), 0);

      localStorage.setItem('WefitMovies', JSON.stringify(updatedCart));
      setMoviesCart(updatedCart);

      localStorage.setItem('Wefit', JSON.stringify({
         valueTotal: newValueTotal,
         valueProduct: updatedCart.length,
      }));
      setCartData({
         valueTotal: newValueTotal,
         valueProduct: updatedCart.length,
      });
   }

   function AddedItem(id: number) {
      const updatedCart = moviesCart.map(item => {
         if (item.id === id) {
            return { ...item, qtd: item.qtd + 1 };
         }
         return item;
      });
      const newValueTotal = updatedCart.reduce((acc, item) => acc + (item.price * item.qtd), 0);

      localStorage.setItem('WefitMovies', JSON.stringify(updatedCart));
      setMoviesCart(updatedCart);

      localStorage.setItem('Wefit', JSON.stringify({
         valueTotal: newValueTotal,
         valueProduct: updatedCart.length,
      }));
      setCartData({
         valueTotal: newValueTotal,
         valueProduct: updatedCart.length,
      });
   }

   const data = useMemo(() => {
      return {
         moviesCart,
         cartData,
         setMoviesCart,
         setCartData,
         AddedProduct,
         RemoveProduct,
         RemoveItem,
         AddedItem,
      };
   }, [, moviesCart, cartData]);

   return (
      <moviesContext.Provider value={data}>{children}</moviesContext.Provider>
   );
}

export function useMovies(): MoviesContextData {
   const context = useContext(moviesContext);
   if (!context) {
      throw new Error('useMovies must be used within a MoviesProvider');
   }
   return context;
}
