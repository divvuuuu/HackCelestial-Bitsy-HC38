import { useCallback } from "react";
import FormFieldLabel from "../components/FormFieldLabel";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import styles from "./StudentLogin.module.css";
import RectangleComponent from "../components/Rectangle";

const StudentLogin = () => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const gotomainpage = useCallback(() => {
    navigate("/mainpage");
  }, [navigate]);

  

  return (
    <div className={styles.studentLogin}>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.helptext}>
            <div className={styles.helpText}>Help text</div>
          </div>
          <div className={styles.validationMessage}>
            <img className={styles.icon} alt="" src="/icon-1.svg" />
            <div className={styles.helpText}>Validation message</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.textFieldElementsCharacte}>
            <div className={styles.characterCount}>0/240</div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.helptext}>
            <div className={styles.helpText}>Help text</div>
          </div>
          <div className={styles.validationMessage}>
            <img className={styles.icon} alt="" src="/icon-1.svg" />
            <div className={styles.helpText}>Validation message</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.textFieldElementsCharacte}>
            <div className={styles.characterCount}>0/240</div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.helptext}>
            <div className={styles.helpText}>Help text</div>
          </div>
          <div className={styles.validationMessage}>
            <img className={styles.icon} alt="" src="/icon-1.svg" />
            <div className={styles.helpText}>Validation message</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.textFieldElementsCharacte}>
            <div className={styles.characterCount}>0/240</div>
          </div>
        </div>
      </div>
      <div className={styles.right3}>
        <div className={styles.textlink}>
          <img className={styles.icon} alt="" src="/icon-2.svg" />
          <div className={styles.linkText}>Link</div>
          <img
            className={styles.iconexternalLinktinyblue}
            alt=""
            src="/iconexternal-linktinyblue.svg"
          />
        </div>
      </div>
      <div className={styles.required}>(required)</div>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.xl}>STUDENT PORTAL</h1>
          <div className={styles.login}>
            <form className={styles.credentials}>
              <div className={styles.pRN}>
                <div className={styles.pRNField}>
                  <div className={styles.top}>
                    <div className={styles.left3}>
                      <FormFieldLabel
                        label="PRN NO."
                        propDisplay="flex"
                        propMinWidth="22"
                        formFieldLabelPadding="2"
                      />
                    </div>
                    <div className={styles.right4}>
                      <div className={styles.textlink}>
                        <img className={styles.icon} alt="" src="/icon-2.svg" />
                        <div className={styles.linkText1}>Link</div>
                        <img
                          className={styles.iconexternalLinktinyblue}
                          alt=""
                          src="/iconexternal-linktinyblue.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.pRNInput}>
                    <div className={styles.textInput}>
                      <input
                        className={styles.enterPrnNo}
                        placeholder="Enter PRN NO."
                        type="text"
                      />
                      <div className={styles.text}>Text</div>
                      <div className={styles.iconButton}>
                        <div className={styles.dividerVertical} />
                        <img className={styles.icon5} alt="" src="/icon.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.passwordParent}>
                  <div className={styles.password}>Password</div>
                  <div className={styles.passwordField}>
                    <div className={styles.textInput1}>
                      <input
                        className={styles.passwordArea}
                        placeholder="Enter Password"
                        type="text"
                      />
                      <div className={styles.text1}>Text</div>
                      <div className={styles.iconButton1}>
                        <div className={styles.dividerVertical1} />
                        <div className={styles.eyeIcon}>
                          <img
                            className={styles.aifilleyeIcon}
                            alt=""
                            src="/aifilleye.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.loginButtonArea} onClick={gotomainpage}>
                <div className={styles.xl1}>Forgot Password?</div>
              </div>
              {/* <Button  children="LOGIN" rightIcon="/lefticon.svg"  /> */}
              <button onClick={gotomainpage} className="Button_button__tPiKR "><img class="Button_leftIcon__7vlyw" alt="" src="/lefticon.svg"/><div class="Button_children__iC0WB">LOGIN</div><img class="Button_leftIcon__7vlyw" alt="" src="/lefticon.svg"/></button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <RectangleComponent />
        <div className={styles.backButton}>
          <div className={styles.circle} />
          <a className={styles.back} onClick={onBackTextClick}>
            Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
