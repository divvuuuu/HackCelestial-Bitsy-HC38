import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Checkresult.module.css';


const Checkresult = () => {
	const navigate = useNavigate();

	const onRectangleContainerClick = useCallback(() => {
		navigate("/");
	}, [navigate]);
	const goto = useCallback(() => {
		navigate("/mainpage");
	}, [navigate]);

	return (
		<div className={styles.checkresult}>
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
			<div className={styles.rectangleParent}>
				<div className={styles.componentChild} />
				<div className={styles.selectSemester}>Select Semester:</div>
			</div>
			<div className={styles.rectangleGroup}>
				<div className={styles.componentItem} />
				<div className={styles.semester1}>Semester 1</div>
			</div>
			<div className={styles.rectangleContainer}>
				<div className={styles.componentItem} />
				<div className={styles.semester1}>Semester 2</div>
			</div>
			<div className={styles.rectangleDiv}>
				<div className={styles.componentItem} />
				<div className={styles.semester1}>Semester 3</div>
			</div>
			<div className={styles.rectangleParent1}>
				<div className={styles.componentItem} />
				<div className={styles.semester1}>Semester 4</div>
			</div>
			<div className={styles.rectangleParent2}>
				<div className={styles.componentItem} />
				<div className={styles.semester1}>Semester 5</div>
			</div>
			<div className={styles.rectangleParent3}>
				<div className={styles.componentItem} />
				<div className={styles.semester1}>Semester 6</div>
			</div>
			<div className={styles.rectangleParent4}>
				<div className={styles.componentItem} />
				<div className={styles.semester1}>Semester 7</div>
			</div>
			<div className={styles.rectangleParent5}>
				<div className={styles.componentItem} />
				<div className={styles.semester1}>Semester 8</div>
			</div>
			<div className={styles.table}>
				<div className={styles.tableRow}>
					<div className={styles.tableCell}>
						<b className={styles.tableHeaderCell}>UNIVERSITY OF MUMBAI</b>
					</div>
				</div>
				<div className={styles.tableRow1}>
					<div className={styles.tableCell}>
						<div className={styles.tableHeaderCell}>Name:</div>
					</div>
				</div>
				<div className={styles.tableRow1}>
					<div className={styles.tableCell}>
						<div className={styles.tableHeaderCell}>PRN No.</div>
					</div>
				</div>
				<div className={styles.tableRow1}>
					<div className={styles.tableCell}>
						<div className={styles.tableHeaderCell}>Course</div>
					</div>
				</div>
				<div className={styles.tableRow1}>
					<div className={styles.tableCell}>
						<div className={styles.tableHeaderCell}>Semester</div>
					</div>
				</div>
				<div className={styles.tableRow1}>
					<div className={styles.tableCell}>
						<div className={styles.tableHeaderCell}>Subject1</div>
					</div>
				</div>
				<div className={styles.tableRow1}>
					<div className={styles.tableCell}>
						<div className={styles.tableHeaderCell}>Subject2</div>
					</div>
				</div>
				<div className={styles.tableRow1}>
					<div className={styles.tableCell}>
						<div className={styles.tableHeaderCell}>Subject3</div>
					</div>
				</div>
				<div className={styles.tableRow1}>
					<div className={styles.tableCell}>
						<div className={styles.tableHeaderCell}>Subject4</div>
					</div>
				</div>
				<div className={styles.tableRow1}>
					<div className={styles.tableCell}>
						<div className={styles.tableHeaderCell}>Subject5</div>
					</div>
					<div className={styles.tableCell}>
						<div className={styles.tableHeaderCell}>SGPA</div>
					</div>
				</div>
			</div>
			<div className={styles.back} onClick={goto}>Back</div>
		</div>);
};

export default Checkresult;
