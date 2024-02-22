import React from 'react';
import { Header } from '../header';
import { Wrapper } from './styles';

type PageWrapperProps = {
   render?: React.ReactNode;
};

export default function PageWrapper({ render }: PageWrapperProps) {
   return (
      <Wrapper>
         <Header />
            <div className='container'>
               {render}
            </div>
      </Wrapper>
   );
}
