export const returnData = (): number[] => {
  if (!localStorage.getItem("number")) {
    return [];
  }

  let data: string[] = localStorage.getItem("number")!.split(", ");

  let numbers: number[] = [];
  for (let i = 0; i < data.length; i++) {
    numbers.push(+data[i]);
  }

  return numbers;
};

export const returnDate = () => {
  if (!localStorage.getItem("date")) {
    return [];
  }
  return localStorage.getItem("date")!.split(", ");
};

export const returnColor = () => {
  if (!localStorage.getItem("color")) {
    return "grey";
  }
  return localStorage.getItem("color");
};
