export const separateWords = (input) => {
  // Pisahkan kata yang digabung dengan huruf kapital
  const result = input.replace(/([a-z])([A-Z])/g, '$1, $2');
  return result;
};
