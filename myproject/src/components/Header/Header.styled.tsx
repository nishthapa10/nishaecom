import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 95%;
  margin: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  .logo {
    height: 2rem;
    max-width: 100%;
  }
  .logoContainer {
    display: flex;
    padding-bottom: 0.6rem;
    padding-right: 3rem;
  }
  .menuContainer {
    display: flex;
    list-style: none;
  }
  .listItem {
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .dropdownIcon {
    transform: rotate(180deg);
    position: relative;
    top: -2px;
    margin-left: 0.5rem;
  }

  .list {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    color: #5a4749;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;
export { HeaderWrapper, Wrapper };
