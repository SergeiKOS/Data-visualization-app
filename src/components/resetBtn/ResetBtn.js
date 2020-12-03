import React from 'react'
import styles from './ResetBtn.module.css'
import PropTypes from "prop-types"; 

const ResetBtn = ({doReset}) => {
  return (
    <button onClick={doReset} className={styles.btn} type='button'>
      Reset graph
    </button>
  )
}

ResetBtn.propTypes = {
  doReset: PropTypes.func.isRequired
};


export default ResetBtn
