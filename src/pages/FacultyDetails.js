import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './FacultyDetails.module.css';


const FacultyDetails = () => {
	const navigate = useNavigate();

	const onRectangleContainerClick = useCallback(() => {
		navigate("/");
	}, [navigate]);
	const goto = useCallback(() => {
		navigate("/college-login");
	}, [navigate]);
	const on1 = useCallback(() => {
		navigate("/checkstudents");
	}, [navigate]);

	return (
		<div className={styles.facultydetails}>
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
			<div className={styles.rectangleParent} onClick={on1}>
				<div className={styles.instanceItem} />
				<b className={styles.checkStudentProgressContainer}>
					<p className={styles.checkStudent}>{`Check student `}</p>
					<p className={styles.checkStudent}>progress</p>
				</b>
				<div className={styles.instanceInner} />
			</div>
			<img className={styles.facultydetailsChild} />
			<div className={styles.facultyName}>Faculty Name:</div>
			<img className={styles.facultydetailsItem} />
			<div className={styles.facultySubjects}>Faculty Subjects:</div>
			<img className={styles.facultydetailsInner} />
			<div className={styles.facultyId}>Faculty ID:</div>
			<div className={styles.back}>Back</div>
			<div className={styles.back1} onClick={goto}>Back</div>
			{/* <div className={styles.back1} onClick={onRectangleContainerClick}>Back</div> */}
		</div>);
};

export default FacultyDetails;
