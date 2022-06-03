
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
      <EntryDistance>
        {distance > 0 && distance+"mi."}
        {distance === 0 && "[YAY]"}
      </EntryDistance>
    </EntryEl>
  )
}

export default Entry;