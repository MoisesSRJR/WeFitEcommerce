import styled from "styled-components";
import colors from "../../../../commom/styles/colors";

export const InputWrapper = styled.div`
   display: flex;
   background-color: white;
   border-radius: 8px;
   padding: 8px;

   &:focus-within {
      box-shadow: 0 0 0 2px ${colors.blue_100};
   }
`;

export const InputField = styled.input`
   width: 100%;
   padding: 10px;
   box-sizing: border-box;
   outline: none;
   border: none;

   font-weight: 400;
   font-size: 16px;
   line-height: 21px;

   &::placeholder {
      color: ${colors.gray_100};

      font-weight: 400;
      font-size: 16px;
      line-height: 27px;
   }
`;

export const SearchButton = styled.button`
   background: transparent;
   border: none;
   cursor: pointer;

   img {
      width: 24px;
      height: 24px;
   }
`;

export const Result = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 24px;

   font-size: 16px;
   line-height: 21px;

   p {
      font-weight: 400;
      margin-block-start: 0;
      margin-block-end: 0;
   }

   span {
      font-weight: 400;
   }
`;
