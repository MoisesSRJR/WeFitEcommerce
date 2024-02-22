import styled, { css } from "styled-components";
import colors from "../../commom/styles/colors";

type ButtonProps = {
   isLoading?: boolean;
   marginLeft?: string;
   marginTop?: string;
   notResizable?: boolean;
   width?: string;
};

export const Container = styled.button<ButtonProps>`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 4px;
   text-transform: uppercase;
   gap: 12px;
   padding: ${(props) => (props.isLoading ? "8px" : "10px 16px")};
   width: ${(props) => (props.width ? props.width : "86px")};
   min-height: 40px;
   font-weight: 700;
   font-size: 12px;
   line-height: 16px;
   text-align: center;
   margin-left: ${(props) => props.marginLeft && props.marginLeft};
   margin-top: ${(props) => props.marginTop && props.marginTop};
   cursor: pointer;

   &[type="submit"] {
      background-color: ${colors.blue_100};
      border: none;
      color: #fff;
   }

   &[type="submit"]:disabled {
      background-color: ${colors.blue_100};
      cursor: default;
   }

   ${(props) =>
      !props.notResizable &&
      css`
         @media (max-width: 768px) {
            margin: 0;
            width: 100%;
         }
      `}
`;
