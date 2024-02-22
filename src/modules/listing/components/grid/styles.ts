import styled from 'styled-components';

export const ContainerGrid = styled.div`
  max-width: 960px;
  margin-top: 24px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 8px;
`;
