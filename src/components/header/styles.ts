import styled from "styled-components";
import colors from "../../commom/styles/colors";

export const Container = styled.div`
   background-color: ${colors.gray_400};
   height: 74px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 8px;
`;

export const Title = styled.div`
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 27px;
   color: ${colors.white};
`;

export const Cart = styled.div`
   display: flex;
   gap: 10px;
   display: flex;
   justify-content: end;

   @media (max-width: 768px) {
      justify-content: center;
      align-items: center;
   }

   .content {
      text-align: end;

      p {
         margin-block-start: 0px;
         margin-block-end: 0px;
         font-style: normal;
         font-weight: 600;
         font-size: 14px;
         color: ${colors.white};

         @media (max-width: 768px) {
            display: none;
         }
      }

      span {
         font-style: normal;
         font-weight: 600;
         font-size: 12px;
         color: ${colors.gray_100};
      }
   }

   img {
      width: 32px;
      height: 32px;
   }
`;
