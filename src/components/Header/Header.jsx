// Style
import { HeaderEl } from './Header.styles'
// Images
import threeDots from "../../images/three-dots-vertical.svg"
// Style
import {
  MenuButton
} from './Header.styles';

const Header = ({ open }) => {

  return (
    <HeaderEl>
      <h1>PADD<span>DLE</span></h1>
      <MenuButton onClick={open}>
        <span>
          <img src={threeDots} alt="menu" />
        </span>
      </MenuButton>
    </HeaderEl>
  )
}

export default Header;