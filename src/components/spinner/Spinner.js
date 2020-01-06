import React from 'react';
import classes from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={classes.Spinner}>
      <div className={classes.SpinnerIcon}>
        <div className={classes.SpinnerHelper}></div>
      </div>
    </div>
  )
};

export default Spinner;