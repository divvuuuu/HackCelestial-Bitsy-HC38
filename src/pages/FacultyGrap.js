import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './FacultyGrap.module.css';


const FacultyGrap = () => {
	const navigate = useNavigate();

	const onRectangleContainerClick = useCallback(() => {
		navigate("/college-login");
	}, [navigate]);
	const goto = useCallback(() => {
		navigate("/checkstudents");
	}, [navigate]);

	return (
		<div className={styles.facultygrap}>
			<div className={styles.header}>
				<img className={styles.headerIcon} alt="" src="Header.svg" />
				<div className={styles.academialink}>AcademiaLink</div>
				<div className={styles.resultsMadeEasy}>Results Made Easy!</div>
				<img className={styles.misLogo1} alt="" src="MIS logo 1.png" />
			</div>
			<div className={styles.vectorParent} onClick={onRectangleContainerClick}>
				<img className={styles.instanceChild} alt="" src="Rectangle 7.svg" />
				<div className={styles.logOut}>Log out</div>
			</div>
			<div className={styles.back} onClick={goto}>Back</div>
		</div>);
};

export default FacultyGrap;
