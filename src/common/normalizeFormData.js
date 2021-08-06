export const normalizeFormData = (data) => {
  const formData = new FormData();
  const result = data.reduce((accum, elem) => {
    accum.push({ id: elem.gid, quantity: elem.quantity });
    return accum;
  }, []);
  result.forEach((item) => {
    formData.append(item.id, item.quantity);
  });
  return formData;
};
