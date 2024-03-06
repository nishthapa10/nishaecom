import styled from 'styled-components';
const CardWrapper = styled.div`
  .container {
    grid-template-columns: 100px 50px 100px;
    grid-template-rows: 80px auto 80px;
    column-gap: 10px;
    row-gap: 15px;
    border: solid 1px;
  }
  .test {
    color: red;
  }
`;
export { CardWrapper };
