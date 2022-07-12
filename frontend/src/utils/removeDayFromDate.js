export const removeDayFromDate = (date) => {
  const arrayDate = new Date(date).toDateString().split(' ');
  const filteredArrayDate = arrayDate.filter((word, index) => index !== 0);
  return filteredArrayDate.join(' ');
};


