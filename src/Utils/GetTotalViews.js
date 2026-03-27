export default function GetTotalViews(arr) {
  let result = 0;
  arr.forEach((item) => {
    result += item.views;
  });

  return result;
}
