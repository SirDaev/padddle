import { useState } from 'react'
// Images
import xCircle from '../../images/close-x-circle.svg'
// Style
import {
  CloseButton,
  Container,
  ModalPane,
  ModalTab,
  ModalTabs,
  ModalWrapper
} from './Modal.styles'

const Modal = ({
  isOpen=false,
  close
}) => {
  const [activeTab,setActiveTab] = useState(0);

  console.log(activeTab)

  return (
    <Container isOpen={isOpen}>
      <ModalWrapper>
        <CloseButton onClick={close}>
          <span>
            <img src={xCircle} alt="menu" />
          </span>
        </CloseButton>
        <ModalTabs>
          <ModalTab onClick={() => setActiveTab(0)}>Help</ModalTab>
          <ModalTab onClick={() => setActiveTab(1)}>About</ModalTab>
        </ModalTabs>
        <ModalPane active={activeTab===0}>
          <p>Here is the Help content.</p>
        </ModalPane>
        <ModalPane active={activeTab===1}>
          <p>Here is the About content.</p>
        </ModalPane>
      </ModalWrapper>
    </Container>
  )
}

export default Modal;