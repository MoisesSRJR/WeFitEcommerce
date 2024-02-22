import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../../page/home';
import PageWrapper from '../../components/wrapper';
import { Cart } from '../../page/cart';
import { Confirmation } from '../../page/confirmation';

export type ProjectRoute = {
   path: string;
   isPublic: boolean;
   element: JSX.Element;
};

export type ProjectRoutes = {
   [x: string]: ProjectRoute;
};

export const ROUTES = {
   home: {
      path: '/',
      isPublic: true,
      element: (
         <PageWrapper
            render={<Home />}
         />
      ),
   },
   cart: {
      path: '/cart',
      isPublic: true,
      element: (
         <PageWrapper
            render={<Cart />}
         />
      ),
   },
   confirmation: {
      path: '/confirmation',
      isPublic: true,
      element: (
         <PageWrapper
            render={<Confirmation />}
         />
      ),
   },
};

export default function ApplicationRoutes() {

   useEffect(() => {setTimeout(() => {
     }, 2000);
   }, []);

   function getRoutes() {
      return Object.keys(ROUTES).map((k) => {
         const rt = ROUTES[k as keyof typeof ROUTES];
         if (rt.isPublic) {
            return <Route key={k} {...rt} />;
         } else {
            return <Route key={k} {...rt} element={<Home />} />;
         }
      });
   }

   return (
      <BrowserRouter>

         <Routes>
            {getRoutes()}
         </Routes>
      </BrowserRouter>
   );
}
