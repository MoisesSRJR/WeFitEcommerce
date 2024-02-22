import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../commom/routes';



export type DefaultRouteFunction = (a?: any) => void;

export type RoutesNavigator = {
   [str in keyof typeof ROUTES]: DefaultRouteFunction;
};

export function useRoutes() {
   const checkModuleActive = useCallback((moduleName: string) => {
      const actualRoute = window.location.pathname;

      return actualRoute.includes(`/${moduleName}/`);
   }, []);

   const checkIsRouteActive = useCallback((route: string) => {
      const actualRoute = window.location.pathname.replace('/', '');
      return route === actualRoute;
   }, []);

   const navigate = useNavigate();
   const routes = useMemo(() => {
      const automaticRoutes: RoutesNavigator = {} as any;
      Object.keys(ROUTES).forEach((key: string) => {
         automaticRoutes[key as keyof typeof ROUTES] = () => {
            navigate(ROUTES[key as keyof typeof ROUTES].path);
         };
      });
      return {
         ...automaticRoutes,
         goBack: (route: string, content = {}) => {
            navigate(route, {
               state: { ...content, goingBack: true },
            });
         },
         clear: () => {
            navigate({}, { state: null });
         },
      };
   }, [navigate]);
   return {
      routes,
      checkModuleActive,
      checkIsRouteActive,
   };
}
