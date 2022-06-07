import styled from 'styled-components';

export const HeaderEl = styled.header`
  border-bottom: solid 1px #aaa;
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

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
    background: #ccc;
  }

  span {
    display: flex;
    width: 50px;
    height: 50px;
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