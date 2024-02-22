import styled from "styled-components";
import colors from "../../../../commom/styles/colors";

export const TableContainer = styled.div`
   background-color: white;
   border-radius: 4px;
   padding: 24px;


   @media (max-width: 768px) {
      padding: 16px;
      height: 75vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }
`;

export const HeaderTable = styled.div`
   height: 40px;
   display: grid;
   grid-template-columns: repeat(12, minmax(0, 1fr));
   font-style: normal;
   font-weight: 700;
   font-size: 14px;
   line-height: 19px;
   color: ${colors.gray_100};
   text-transform: uppercase;

   .product {
      grid-column: span 5 / span 1;
   }

   .qtd {
      grid-column: span 2 / span 1;
   }

   .sub {
      display: flex;
      justify-content: center;
      grid-column: span 3 / span 1;
      margin-left: 16px;
   }

   @media (max-width: 768px) {
      display: none;
   }
`;

export const Products = styled.div`
   height: auto;
   margin-bottom: 21px;

   @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
   }
`;

export const ProductsMobile = styled.div`
   height: auto;
   overflow-y: auto;
   margin-bottom: 21px;
   display: flex;
   flex-direction: column;
`;

export const List = styled.div`
   display: grid;
   grid-template-columns: repeat(12, minmax(0, 1fr));
   margin-bottom: 10px;

   @media (max-width: 768px) {
      display: flex;
   }
`;

export const ListMobile = styled.div`
   height: 115px;
   display: flex;
   justify-content: start;
   margin-bottom: 10px;
`;

export const Column = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 100%;
   height: 80px;

   @media (max-width: 371px) {
      padding-left: 5px;
   }

   .titleMobile {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      color: ${colors.gray_400};
   }

   .priceMobile {
      //padding-left: 15%;
      color: ${colors.gray_400};
   }
`;

export const Row = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100px;
   margin-left: auto;
`;

export const SubTotal = styled.div`
   display: flex;
   flex-direction: column;
   text-align: end;

   font-weight: 700;
   font-size: 16px;
   line-height: 21px;
   font-weight: 700;
   font-size: 12px;
   line-height: 16px;
   color: ${colors.gray_400};

   .subTotal {
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
      color: ${colors.gray_100};
   }
`;

export const Movie = styled.div`
   grid-column: span 2 / span 1;
   img {
      width: 89px;
      height: 114px;
   }
   @media (max-width: 768px) {
      img {
         width: 64px;
         height: 82px;
         margin-right: 16px;
      }
   }
`;

export const Names = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   grid-column: span 3 / span 1;
   color: ${colors.gray_400};

   @media (max-width: 768px) {
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items: start;
      gap: 16px;
   }

   .name {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      color: ${colors.gray_400};
   }

   .price {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      margin-top: 8px;

      @media (max-width: 768px) {
         margin-top: 0;
      }
   }
`;

export const Count = styled.div`
   display: flex;
   align-items: center;
   grid-column: span 2 / span 1;

   @media (max-width: 768px) {
      display: none;
   }
`;

export const PriceTotal = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   grid-column: span 3 / span 1;
   color: ${colors.gray_400};

   @media (max-width: 768px) {
      display: none;
   }

   span {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
   }
`;

export const PriceTotalMobile = styled.div`
   display: none;

   @media (max-width: 768px) {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${colors.gray_400};
   }

   span {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
   }
`;

export const Trash = styled.div`
   display: flex;
   justify-content: end;
   align-items: center;
   grid-column: span 2 / span 1;

   @media (max-width: 768px) {
      justify-content: start;
      align-items: normal;
   }
`;

export const FinalOrder = styled.div`
   border-top: 1px solid ${colors.gray_100};
   height: 60px;
   display: flex;
   justify-content: space-between;
   align-items: end;

   @media (max-width: 768px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 100px;
      gap: 8px;
   }
`;

export const Total = styled.div`
   height: 40px;
   display: flex;
   justify-content: space-between;
   align-items: end;
   font-style: normal;
   font-weight: 700;
   font-size: 14px;
   line-height: 19px;
   color: ${colors.gray_100};
   text-transform: uppercase;
   padding-right: 15px;

   @media (max-width: 768px) {
      padding-bottom: 5px;
      width: 100%;
      padding-right: 0;
      justify-content: end;
   }

   .value {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
      color: ${colors.gray_400};
      margin-left: 16px;
   }
`;

export const EmptyCart = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 447px;
   margin: 20px auto;

   p {
      color: ${colors.gray_400};
      margin-block-start: 0;
      margin-block-start: 0;
      font-weight: 700;
      font-size: 20px;

      @media (max-width: 768px) {
         text-align: center;
         width: 82%;
      }
   }

   img {
      margin-top: 32px;
   }

   .divider {
      height: 1px;
      background-color: ${colors.gray_400};
      width: 100%;
      margin-top: 1px;
      margin-bottom: 0;

      @media (max-width: 768px) {
         margin-bottom: 32px;
      }
   }
`;
