import styled from "styled-components";

export const Wrapper = styled.div`
   max-width: 960px;
   margin: 0 auto;
   padding: 0;

   @media (max-width: 1024px) {
      margin-left: 16px;
      margin-right: 16px;
   }

   .container {
      padding: 0;
      margin-top: 24px;
   }
`;
