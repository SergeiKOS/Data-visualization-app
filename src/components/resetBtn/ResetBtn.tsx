import React from "react";
import IResetBtn from "./IResetBtn.interface";
// @ts-ignore
import styles from "./ResetBtn.module.css";

const ResetBtn = ({ onReset }: IResetBtn) => {
  return (
    <button onClick={onReset} className={styles.btn} type="button">
      Reset graph
    </button>
  );
};

export default ResetBtn;
