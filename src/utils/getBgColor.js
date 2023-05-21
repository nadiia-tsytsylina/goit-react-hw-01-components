export default function getBgColor(isOnline) {
  switch (isOnline) {
    case true:
      return '#47b14a';
    case false:
      return '#fa554f';
    default:
      return '#ababab';
  }
}
