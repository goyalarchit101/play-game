import React from 'react'
import styles from './Home.module.css';
import Button from '../Button/Button';
import { Navigate, useNavigate } from 'react-router';
const Home = () => {
    const navigate = useNavigate(); 
    const playNow = ()=>{
        navigate('/playgame');
    }

    return (
        <div className={styles.container}>

            <div className='imageContiner'>
                <img className={styles.diceImage} src="dices1.png" alt="asas" />
            </div>

            <div className={styles.textContainer}>
                <h1>
                    DICE GAME
                </h1>
                <div className={styles.buttonContainer}>
                    <Button onButtonClick={() => playNow()} isWhite={false} text="PLAY Now" />
                </div>
            </div>
        </div>
    )
}

export default Home