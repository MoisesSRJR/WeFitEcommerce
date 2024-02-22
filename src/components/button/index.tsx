import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   isLoading?: boolean;
   label: ReactNode;
   marginLeft?: string;
   marginTop?: string;
   icon?: ReactNode;
   width?: string;
   item?: number;
   backgroundColor?: string;
}

export function Button({ isLoading, label, marginLeft, marginTop, width, item, icon, backgroundColor, ...props }: ButtonProps): JSX.Element {
   return (
      <Container isLoading={isLoading} marginLeft={marginLeft} marginTop={marginTop} width={width} background={backgroundColor} {...props}>
         <span className='items'>{icon} {item}</span>
         <span className='label'>{label}</span>
      </Container>
   );
}
