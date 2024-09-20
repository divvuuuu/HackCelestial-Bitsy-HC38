import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FormFieldLabel.module.css";

const FormFieldLabel = memo(
  ({
    className = "",
    label,
    propDisplay,
    propMinWidth,
    formFieldLabelPadding,
  }) => {
    const labelStyle = useMemo(() => {
      return {
        display: propDisplay,
        minWidth: propMinWidth,
      };
    }, [propDisplay, propMinWidth]);

    const formFieldLabelStyle = useMemo(() => {
      return {
        padding: formFieldLabelPadding,
      };
    }, [formFieldLabelPadding]);

    return (
      <div
        className={[styles.formfieldlabel, className].join(" ")}
        style={formFieldLabelStyle}
      >
        <div className={styles.label} style={labelStyle}>
          {label}
        </div>
        <div className={styles.required}>(required)</div>
      </div>
    );
  }
);

FormFieldLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  formFieldLabelPadding: PropTypes.any,
};

export default FormFieldLabel;
