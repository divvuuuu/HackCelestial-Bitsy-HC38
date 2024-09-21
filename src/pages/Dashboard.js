import { useCallback } from 'react';
import styles from './Dashboard.module.css';
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
	const navigate = useNavigate();
  	
  	const onRectangleContainerClick = useCallback(() => {
		navigate("/");
  	}, [navigate]);
	  const goto = useCallback(() => {
		navigate("/mainpage");
  	}, [navigate]);
  	
  	return (
    		<div className={styles.dashboard}>
      			<div className={styles.header}>
        				<img className={styles.headerIcon} alt="" src="Header.svg" />
        				<div className={styles.academialink}>AcademiaLink</div>
        				<div className={styles.resultsMadeEasy}>Results Made Easy!</div>
        				<img className={styles.misLogo1} alt="" src="MIS logo 1.png" />
      			</div>
      			<div className={styles.table}>
        				<div className={styles.tableRow}>
          					<div className={styles.tableCell} />
        				</div>
        				<div className={styles.tableRow}>
          					<div className={styles.tableCell1} />
        				</div>
        				<div className={styles.tableRow}>
          					<div className={styles.tableCell1} />
        				</div>
        				<div className={styles.tableRow}>
          					<div className={styles.tableCell1} />
        				</div>
        				<div className={styles.tableRow}>
          					<div className={styles.tableCell1} />
        				</div>
        				<div className={styles.tableRow}>
          					<div className={styles.tableCell1} />
        				</div>
        				<div className={styles.tableRow}>
          					<div className={styles.tableCell1} />
        				</div>
        				<div className={styles.tableRow}>
          					<div className={styles.tableCell1} />
        				</div>
        				<div className={styles.tableRow}>
          					<div className={styles.tableCell1} />
        				</div>
        				<div className={styles.tableRow}>
          					<div className={styles.tableCell1} />
        				</div>
      			</div>
      			<div className={styles.newsAndUpdates}>News and Updates</div>
      			<div className={styles.vectorParent} onClick={onRectangleContainerClick}>
        				<img className={styles.instanceChild} alt="" src="Rectangle 7.svg" />
        				<div className={styles.logOut}>Log out</div>
      			</div>
      			<div className={styles.back} onClick={goto}>Back</div>
    		</div>);
};

export default Dashboard;
