
// Style
import {
  EntryBearing,
  EntryDistance,
  EntryEl,
  EntryName
} from './Entry.styles';

const Entry = ({
  name="",
  distance="",
  bearing=""
}) => {

  return (
    <EntryEl>
      <EntryName>{name}</EntryName>
      <EntryDistance>
        {distance > 0 && distance+"mi."}
        {distance === 0 && "[YAY]"}
      </EntryDistance>
      <EntryBearing>
        {bearing}
      </EntryBearing>
    </EntryEl>
  )
}

export default Entry;