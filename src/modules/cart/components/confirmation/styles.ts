import styled from "styled-components";
import colors from "../../../../commom/styles/colors";

export const Container = styled.div`
   background-color: white;
   border-radius: 4px;
   padding: 64px;

   @media (max-width: 768px) {
      padding: 32px;
   }

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
   font-weight: 700;
   text-align: center;

   p {
      color: ${colors.gray_400};
      margin-block-start: 0;
      margin-block-start: 0;

      @media (max-width: 768px) {
         width: 150px;
      }
   }

   img {
      margin-top: 32px;

      @media (max-width: 768px) {
         margin-bottom: 32px;
         max-width: 250px;
      }
   }
`;
