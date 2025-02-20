export const scrollTop = () => {
  window.scrollTo(0, 0);
};

export const formatValue = (value) => {
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  if (value instanceof Date) {
    return value.toLocaleDateString('id-ID');
  }
  return value;
};
