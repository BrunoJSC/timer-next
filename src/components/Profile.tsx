import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

  const { level } = useContext(ChallengeContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/BrunoJSC.png" alt="Bruno" />
      <div>
        <strong>Bruno de Jesus</strong>
        <p>
          <img src="icons/level.svg" alt="Level Up"/>
          Level { level }

        </p>
        
      </div>
    </div>
  );
}