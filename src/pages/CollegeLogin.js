import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormFieldLabel from "../components/FormFieldLabel";
import Button from "../components/Button";
import styles from "./CollegeLogin.module.css";
import RectangleComponent from "../components/Rectangle";

const CollegeLogin = () => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <form className={styles.collegeLogin}>
      <header className={styles.bottomNavigation}>
        <h1 className={styles.xl}>STUDENT PORTAL</h1>
        <a className={styles.back} onClick={onBackTextClick}>
          Back
        </a>
      </header>
      <div className={styles.textInput}>
        <input
          className={styles.enterrCollegeCode}
          placeholder="Enterr College  code "
          type="text"
        />
        <div className={styles.text}>Text</div>
        <div className={styles.iconButton}>
          <div className={styles.dividerVertical} />
          <img className={styles.icon} alt="" src="/icon.svg" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.helptext}>
            <div className={styles.helpText}>Help text</div>
          </div>
          <div className={styles.validationMessage}>
            <img className={styles.icon1} alt="" src="/icon-1.svg" />
            <div className={styles.validationMessage1}>Validation message</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.textFieldElementsCharacte}>
            <div className={styles.characterCount}>0/240</div>
          </div>
        </div>
      </div>
      <div className={styles.top}>
        <div className={styles.left1}>
          <FormFieldLabel
            label="College Code"
            propDisplay="inline-block"
            propMinWidth="103px"
            formFieldLabelPadding="0px 20px 0px 0px"
          />
        </div>
        <div className={styles.right1}>
          <div className={styles.textlink}>
            <img className={styles.icon1} alt="" src="/icon-2.svg" />
            <div className={styles.linkText}>Link</div>
            <img
              className={styles.iconexternalLinktinyblue}
              alt=""
              src="/iconexternal-linktinyblue.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom1}>
        <div className={styles.left}>
          <div className={styles.helptext}>
            <div className={styles.helpText}>Help text</div>
          </div>
          <div className={styles.validationMessage}>
            <img className={styles.icon1} alt="" src="/icon-1.svg" />
            <div className={styles.validationMessage1}>Validation message</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.textFieldElementsCharacte}>
            <div className={styles.characterCount}>0/240</div>
          </div>
        </div>
      </div>
      <div className={styles.textInput1}>
        <input
          className={styles.textInputChild}
          placeholder="Enter Password"
          type="text"
        />
        <div className={styles.text1}>Text</div>
        <div className={styles.iconButton1}>
          <div className={styles.dividerVertical1} />
          <div className={styles.visibility}>
            <img className={styles.aifilleyeIcon} alt="" src="/aifilleye.svg" />
          </div>
        </div>
      </div>
      <div className={styles.bottom1}>
        <div className={styles.left}>
          <div className={styles.helptext}>
            <div className={styles.helpText}>Help text</div>
          </div>
          <div className={styles.validationMessage}>
            <img className={styles.icon1} alt="" src="/icon-1.svg" />
            <div className={styles.validationMessage1}>Validation message</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.textFieldElementsCharacte}>
            <div className={styles.characterCount}>0/240</div>
          </div>
        </div>
      </div>
      <div className={styles.right4}>
        <div className={styles.textlink1}>
          <img className={styles.icon1} alt="" src="/icon-2.svg" />
          <div className={styles.linkText}>Link</div>
          <img
            className={styles.iconexternalLinktinyblue}
            alt=""
            src="/iconexternal-linktinyblue.svg"
          />
        </div>
      </div>
      <div className={styles.password}>Password</div>
      <div className={styles.required}>(required)</div>
      <div className={styles.xl1}>Forgot Password?</div>
      <Button
        children="LOGIN"
        propFontSize="20px"
        propDisplay="unset"
        propMinWidth="unset"
        rightIcon="/lefticon.svg"
        buttonPosition="absolute"
        buttonTop="612.6px"
        buttonLeft="95px"
        buttonBorder="none"
        buttonFlex="unset"
      />
      <main className={styles.right5}>
        <RectangleComponent propTop="394px" propHeight="1024px" />
        <div className={styles.buttonGraphic}>
          <div className={styles.circle} />
        </div>
      </main>
    </form>
  );
};

export default CollegeLogin;
