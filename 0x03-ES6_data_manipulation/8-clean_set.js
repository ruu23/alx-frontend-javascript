export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const list = [];
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }
  return list.join('-');
}
