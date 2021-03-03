import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experinceToNextLevel } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(100 / experinceToNextLevel * currentExperience);

    return (
        <header className={styles.experienceBar}>
            <span>0 Xp</span>
            <div >
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experinceToNextLevel} Xp</span>
        </header>
    );
}