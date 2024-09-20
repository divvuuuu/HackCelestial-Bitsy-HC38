import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./RectangleComponent.module.css";

const RectangleComponent = ({ className = "", propTop, propHeight }) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  return (
    <div
      className={[styles.shapeWrapper, className].join(" ")}
      style={rectangleDivStyle}
    >
      <div className={styles.shape} />
    </div>
  );
};

RectangleComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propHeight: PropTypes.any,
};

export default RectangleComponent;
