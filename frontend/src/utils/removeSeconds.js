export const removeSeconds = (time) => {
  const responseTime = [...time];
  return responseTime.slice(0, 5).join('');
};
