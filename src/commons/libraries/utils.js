export const getMyDate = (myDate) => {
  const aaa = new Date(myDate);
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1; // 여기서 +1을 하는 이유는 월을 0~11까지 받아오기때문입니다
  const dd = aaa.getDate();
  return `${yyyy}-${mm}-${dd}`;
};
