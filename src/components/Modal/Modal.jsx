import { useState } from 'react'
// Style
import {
  Container,
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
        <ModalTabs>
          <ModalTab onClick={() => setActiveTab(0)}>Help</ModalTab>
          <ModalTab onClick={() => setActiveTab(1)}>About</ModalTab>
        </ModalTabs>
      </ModalWrapper>
    </Container>
  )
}

export default Modal;