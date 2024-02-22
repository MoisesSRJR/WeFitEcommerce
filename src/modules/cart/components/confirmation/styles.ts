import styled from 'styled-components';
import colors from '../../../../commom/styles/colors';

export const Container = styled.div`
   background-color: white;
   border-radius: 4px;
   padding: 64px;

   .containerButton {
      display: flex;
      justify-content: center;
   }
`;

export const SuccessCard = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 447px;
   margin: 0px auto;

   span {
      color: ${colors.gray_400};
   }

   img {
      margin-top: 32px;
   }
`;
