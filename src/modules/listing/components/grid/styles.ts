import styled from "styled-components";

export const ContainerGrid = styled.div`
   max-width: 960px;
   margin-top: 24px;
   display: grid;
   margin-left: auto;
   margin-right: auto;
   grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
   gap: 8px;
   height: max-content;

   @media (max-width: 768px) {
      margin-bottom: 40px;
      width: 100%;
   }
`;
