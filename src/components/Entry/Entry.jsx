
// Style
import {
  EntryDistance,
  EntryEl,
  EntryName
} from './Entry.styles';

const Entry = ({
  name="",
  distance=""
}) => {

  return (
    <EntryEl>
      <EntryName>{name}</EntryName>
      <EntryDistance>{distance}</EntryDistance>
    </EntryEl>
  )
}

export default Entry;