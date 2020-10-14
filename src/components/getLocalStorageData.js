export const returnData = () => {
  if (!localStorage.getItem("number")) {
    return [];
  }

  let number = localStorage.getItem("number").split(", ");
  for (let i = 0; i < number.length; i++) {
    number[i] = +number[i];
  }

  return number;
};

export const returnDate = () => {
  if (!localStorage.getItem("date")) {
    return [];
  }
  return localStorage.getItem("date").split(", ");
};

export const returnColor = () => {
  if (!localStorage.getItem("color")) {
    return "grey";
  }
  return localStorage.getItem("color");
};
