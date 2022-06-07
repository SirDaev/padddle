import styled from 'styled-components';

export const HeaderEl = styled.header`
  border-bottom: solid 1px #aaa;
  position: relative;
  height: 40px;


  h1 {
    margin: 0;

    span {
      color: ${props => props.theme.highlight};
    }
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background: transparent;
  white-space: nowrap;
  text-decoration: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    background: #aaa;
  }

  span {
    display: flex;
    width: 40px;
    height: 40px;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 10px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;