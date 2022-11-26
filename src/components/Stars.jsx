import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";

const Stars = (props) => {
const lines = [];
  (() => {
    if (Number(props.count) >= 1 && Number(props.count) <= 5) {

        for (let i = 0; i < props.count; i++) {
             lines.push(<li key={i}><Star/></li>)
        }
        
    } else return <></>;
  })();

  if (lines.length > 0) return <ul className="card-body-stars u-clearfix">
    {
        lines.map(line => line)
    }
  </ul>


};

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
    count: PropTypes.number.isRequired,
};

export default Stars;
