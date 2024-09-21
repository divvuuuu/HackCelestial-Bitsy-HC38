import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './CheckStudentProgress.module.css';


const CheckStudentProgress = () => {
	const navigate = useNavigate();

	const onRectangleContainerClick = useCallback(() => {
		navigate("/facultygraph");
	}, [navigate]);
	const gotocollegelogin = useCallback(() => {
		navigate("/college-login");
	}, [navigate]);
	const goto = useCallback(() => {
		navigate("/FacultyDetails");
	}, [navigate]);

	return (
		<div className={styles.checkstudentprogress}>
			<div className={styles.header}>
				<img className={styles.headerIcon} alt="" src="Header.svg" />
				<div className={styles.academialink}>AcademiaLink</div>
				<div className={styles.resultsMadeEasy}>Results Made Easy!</div>
				<img className={styles.misLogo1} alt="" src="MIS logo 1.png" />
			</div>
			<div className={styles.vectorParent} onClick={gotocollegelogin}>
				<img className={styles.instanceChild} alt="" src="Rectangle 7.svg" />
				<div className={styles.logOut}>Log out</div>
			</div>
			<div className={styles.rectangleParent}>
				<div className={styles.componentChild} />
				<b className={styles.selectSubject}>Select Subject:</b>
			</div>
			<div className={styles.rectangleGroup} onClick={onRectangleContainerClick}>
				<div className={styles.componentItem} />
				<b className={styles.above9Cgpa}>Above 9 CGPA</b>
			</div>
			<div className={styles.rectangleContainer} onClick={onRectangleContainerClick}>
				<div className={styles.componentItem} />
				<b className={styles.above9Cgpa}>
					<p className={styles.successfulunsuccessful}>Successful/Unsuccessful</p>
				</b>
			</div>
			<div className={styles.rectangleDiv} onClick={onRectangleContainerClick}>
				<div className={styles.componentItem} />
				<b className={styles.above9Cgpa}>Above 9 CGPA</b>
			</div>
			<div className={styles.rectangleDiv} onClick={onRectangleContainerClick}>
				<div className={styles.componentItem} />
				<b className={styles.above9Cgpa}>Above 8 CGPA</b>
			</div>
			<div className={styles.rectangleParent2} onClick={onRectangleContainerClick}>
				<div className={styles.componentItem} />
				<b className={styles.above9Cgpa}>Above 7 CGPA</b>
			</div>
			<div className={styles.rectangleParent3} onClick={onRectangleContainerClick}>
				<div className={styles.componentItem} />
				<b className={styles.above9Cgpa}>Above 6 CGPA</b>
			</div>
			<div className={styles.back} onClick={goto}>Back</div>
		</div>);
};

export default CheckStudentProgress;
