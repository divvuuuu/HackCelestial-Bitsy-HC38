import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './MainPage.module.css';
import Button from '../components/Button';


const MainPage = () => {
	const navigate = useNavigate();

	const onRectangleContainerClick = useCallback(() => {
		navigate("/Dashboard");
	}, [navigate]);
	const onRectangleContainerClick1 = useCallback(() => {
		navigate("/Checkresult")
	}, [navigate]);
	const onRectangleContainerClick2 = useCallback(() => {
		navigate("/ResultAnalysis")
	}, [navigate]);
	const onRectangleContainerClick4 = useCallback(() => {
		navigate("/");
	}, [navigate]);

	return (
		<div className={styles.mainpage}>
			<div className={styles.macbookPro141Wrapper}>
				<div className={styles.macbookPro141}>
					<div className={styles.header}>
						<div className={styles.headerIcon} />
						<div className={styles.academialink}>AcademiaLink</div>
						<div className={styles.resultsMadeEasy}>Results Made Easy!</div>
						<img className={styles.misLogo1} alt="" src="MIS logo 1.png" />
					</div>
					<div className={styles.rectangleParent} onClick={onRectangleContainerClick}>
						<div className={styles.componentChild} />
						<div className={styles.dashboard}>Dashboard</div>
					</div>
					<div className={styles.vectorParent} onClick={onRectangleContainerClick1}>
						<div className={styles.componentChild}  />
						<div className={styles.checkResults}>Check Results</div>
					</div>
					<div className={styles.rectangleGroup} onClick={onRectangleContainerClick2}>
						<div className={styles.componentChild} />
						<div className={styles.resultanalaysis}>ResultAnalaysis</div>
					</div>
					<div className={styles.macbookPro141Child} />
					<img className={styles.macbookPro141Item} alt="" src="Line 6.svg" />
					<div className={styles.macbookPro141Inner} />
					<div className={styles.lineDiv} />
					<div className={styles.macbookPro141Child1} />
					<div className={styles.macbookPro141Child2} />
					<div className={styles.macbookPro141Child3} />
					<div className={styles.studentProfile}>
						<div className={styles.studentProfile1}>Student Profile</div>
						<div className={styles.classbatch}>Class/Batch:</div>
						<div className={styles.admissionYear}>Admission Year:</div>
						<div className={styles.collegeId}>College ID:</div>
						<div className={styles.prnNumber}>PRN Number:</div>
						<div className={styles.studentName}>Student Name:</div>
						<div className={styles.dateOfBirth}>Date of Birth:</div>
						<img className={styles.id11Icon} alt="" src="id-1 1.png" />
					</div>
					{/* <div className={styles.vectorGroup} onClick={gottooption}>
						<img className={styles.rectangleIcon} alt="" src="Rectangle 6.svg" />
						<div className={styles.logOut}>LOG OUT</div>
					</div> */}
					<img className={styles.lineIcon} alt="" src="Line 7.svg" />
					<div className={styles.vectorContainer} onClick={onRectangleContainerClick4}>
						<img className={styles.componentChild1} alt="" src="Rectangle 7.svg" />
						<div className={styles.logOut1}>Log out</div>
					</div>
				</div>
			</div>
		</div>);
};

export default MainPage;
