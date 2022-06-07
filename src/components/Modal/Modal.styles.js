import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${props => props.isOpen ? "block" : "none"};

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  background-color: #fffaf2;
`;

export const ModalTabs = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalTab = styled.button`
  padding: 20px;
  border: 1px solid green;
`;
