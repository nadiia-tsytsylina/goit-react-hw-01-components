export default function getBgColor(isOnline) {
  switch (isOnline) {
    case true:
      return '#32b132';
    case false:
      return 'red';
    default:
      return '#ababab';
  }
}
