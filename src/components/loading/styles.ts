import styled, { keyframes } from "styled-components";

const spin = keyframes`
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
`;

export const Box = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 50vh;

   @media (max-width: 768px) {
      height: 100vh;
   }
`;

export const SpinnerContainer = styled.div`
   display: inline-block;
   width: 62px;
   height: 62px;
   border: 2px solid #808080; /* Light grey */
   border-top: 2px solid #ffffff; /* Blue */
   border-radius: 50%;
   animation: ${spin} 1s linear infinite;
`;
