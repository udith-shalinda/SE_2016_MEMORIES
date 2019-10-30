import React, { Fragment } from "react";
import { Progress } from "semantic-ui-react";

const ProgressBar = ({ percentage }) => {
  return (
    <Fragment>
      {percentage !== 0 && percentage !== 100 && (
        <Progress
          className="progress__bar"
          percent={percentage}
          progress
          indicating
          size="medium"
          inverted
        />
      )}
    </Fragment>
  );
};

export default ProgressBar;
