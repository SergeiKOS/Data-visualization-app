const data = {
  user: {
    data: {
      "2018/03/09": "73",
      "2018/03/09": "73",
      "2018/03/31": "75",
      "2018/04/01": "75",
      "2018/05/01": "76",
      "2018/06/01": "77",
      "2018/07/01": "78",
      "2018/08/01": "78",
      "2018/09/01": "80",
      "2018/10/01": "77",
      "2018/11/01": "74",
      "2018/12/01": "76",
      "2019/01/01": "77",
      "2019/02/01": "78",
      "2019/02/28": "83",
      "2019/03/01": "84",
      "2019/04/01": "85",
      "2019/05/01": "82",
      "2019/06/01": "83",
      "2019/07/01": "85",
      "2019/07/31": "87",
      "2019/10/01": "87.7",
      "2019/09/01": "86",
      "2019/10/01": "84",
      "2019/11/01": "83",
      "2019/12/01": "83",
      "2020/01/01": "85",
      "2020/02/01": "84",
      "2020/03/01": "85",
      "2020/04/01": "84",
      "2020/05/01": "85",
    },
  },
};

let keyList = [];
let valueList = [];

const getKeyValueArray = () => {
  for (let [key, value] of Object.entries(data.user.data)) {
    valueList.push(value);
    keyList.push(key);
  }
  valueList = valueList.join(", ");
  keyList = keyList.join(", ");
};

export const returnData = () => {
  if (!localStorage.getItem("weights")) {
    getKeyValueArray();
    localStorage.setItem("weights", valueList);
  }

  let weights = localStorage.getItem("weights").split(", ");
  for (let i = 0; i < weights.length; i++) {
    weights[i] = +weights[i];
  }

  return weights;
};
export const returnDate = () => {
  if (!localStorage.getItem("date")) {
    localStorage.setItem("date", keyList);
  }
  return localStorage.getItem("date").split(", ");
};
