import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  className = "",
  children,
  propFontSize,
  propDisplay,
  propMinWidth,
  rightIcon,
  buttonPosition,
  buttonTop,
  buttonLeft,
  buttonBorder,
  buttonFlex,
}) => {
  const childrenStyle = useMemo(() => {
    return {
      fontSize: propFontSize,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propFontSize, propDisplay, propMinWidth]);

  const buttonStyle = useMemo(() => {
    return {
      position: buttonPosition,
      top: buttonTop,
      left: buttonLeft,
      border: buttonBorder,
      flex: buttonFlex,
    };
  }, [buttonPosition, buttonTop, buttonLeft, buttonBorder, buttonFlex]);

  return (
    <button
      className={[styles.button, className].join(" ")}
      style={buttonStyle}
    >
      <img className={styles.leftIcon} alt="" src="/lefticon.svg" />
      <div className={styles.children} style={childrenStyle}>
        {children}
      </div>
      <img className={styles.leftIcon} alt="" src={rightIcon} />
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  rightIcon: PropTypes.string,

  /** Style props */
  propFontSize: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  buttonPosition: PropTypes.any,
  buttonTop: PropTypes.any,
  buttonLeft: PropTypes.any,
  buttonBorder: PropTypes.any,
  buttonFlex: PropTypes.any,
};

export default Button;
