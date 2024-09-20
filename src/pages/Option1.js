import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./Option1.module.css";

const Option1 = () => {
  const navigate = useNavigate();

  const onFormContainerClick = useCallback(() => {
    navigate("/administrater-login");
  }, [navigate]);

  const onFormContainerClick1 = useCallback(() => {
    navigate("/college-login");
  }, [navigate]);

  const onFormContainerClick2 = useCallback(() => {
    navigate("/student-login");
  }, [navigate]);

  return (
    <div className={styles.option}>
      <div className={styles.optionInner}>
        <div className={styles.xlParent}>
          <h1 className={styles.xl}>STUDENT PORTAL</h1>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.formParent}>
                <div className={styles.form} onClick={onFormContainerClick}>
                  <Button
                    children="Administrator"
                    propFontSize="24px"
                    propDisplay="unset"
                    propMinWidth="unset"
                    rightIcon="/lefticon.svg"
                    buttonPosition="unset"
                    buttonTop="unset"
                    buttonLeft="unset"
                    buttonBorder="unset"
                    buttonFlex="1"
                  />
                </div>
                <div className={styles.form} onClick={onFormContainerClick1}>
                  <Button
                    children="College"
                    propFontSize="24px"
                    propDisplay="inline-block"
                    propMinWidth="90px"
                    rightIcon="/lefticon1.svg"
                    buttonPosition="unset"
                    buttonTop="unset"
                    buttonLeft="unset"
                    buttonBorder="unset"
                    buttonFlex="1"
                  />
                </div>
              </div>
              <div className={styles.form2} onClick={onFormContainerClick2}>
                <Button
                  children="Studdent"
                  propFontSize="24px"
                  propDisplay="unset"
                  propMinWidth="unset"
                  rightIcon="/lefticon.svg"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonBorder="unset"
                  buttonFlex="unset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.right}>
        <section className={styles.rightInner}>
          <div className={styles.instanceChild} />
        </section>
        <section className={styles.rightChild} />
      </main>
    </div>
  );
};

export default Option1;
