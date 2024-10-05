export default function concatArrays(array1, array2, string) {
  const newStr = string.split('');
  const newArr = [...array1, ...array2, ...newStr];
  return newArr;
}
