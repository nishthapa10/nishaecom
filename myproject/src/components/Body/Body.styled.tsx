import styled from 'styled-components';

const BodyWrapper = styled.div`
  .allProductsImg {
    width: 94%;
    margin: auto;
    position: relative;
  }
  .bodyWrapper {
  }

  .bodyText {
    font-size: 3rem;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: white;
    text-transform: uppercase;
    line-height: 1.1;
    font-weight: 700;
    font-family: Gotham;
  }
  .imgContainer {
    position: relative;
    background: red;
    margin: 1rem 10px;
    min-height: 400px;
    overflow: hidden;
    border-radius: 1.5rem;
  }
  .allProductsImg:hover .image {
    transform: scale(1.09);
  }
  .allProductsImg .image {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    object-fit: cover;
    width: 100%; /* Use 100% width to ensure the image fills the container */
    height: 100%; /* Use 100% height to ensure the image fills the container */
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-duration: 3000ms;
  }
`;

export { BodyWrapper };
