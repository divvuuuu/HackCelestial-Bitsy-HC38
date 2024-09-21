import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Admin.module.css';


const Admin = () => {
	const navigate = useNavigate();
  	
  	const onRec = useCallback(() => {
		navigate("/administrater-login");
  	}, [navigate]);
  	
  	return (
    		<div className={styles.admin}>
      			<div className={styles.header}>
        				<div className={styles.headerIcon} />
        				<div className={styles.academialink}>AcademiaLink</div>
        				<div className={styles.resultsMadeEasy}>Results Made Easy!</div>
        				<img className={styles.misLogo1} alt="" src="MIS logo 1.png" />
      			</div>
      			<div className={styles.vectorParent} onClick={onRec}>
        				<div className={styles.instanceChild} />
        				<div className={styles.logOut}>Log out</div>
      			</div>
      			<div className={styles.rectangleParent}>
        				<div className={styles.componentChild} />
        				<b className={styles.addStudent}>Add student</b>
      			</div>
      			<div className={styles.rectangleGroup}>
        				<div className={styles.componentChild} />
        				<b className={styles.updateStudent}>Update Student</b>
      			</div>
      			<div className={styles.rectangleContainer}>
        				<div className={styles.componentChild} />
        				<b className={styles.uploadResult}>Upload Result</b>
      			</div>
      			<div className={styles.rectangleDiv}>
        				<div className={styles.componentChild} />
        				<b className={styles.uploadNews}>Upload News / Update</b>
      			</div>
    		</div>);
};

export default Admin;
