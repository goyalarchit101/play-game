import React, { useState } from 'react'
import styles from './Main.module.css';
import DiceRoll from '../DiceRoll/DiceRoll';


const Main = () => {
    const numberList = [1, 2, 3, 4, 5, 6];
    const [selectedNumeber, setselectedNumeber] = useState(null);
    const [showError, setShowError] = useState(false);
    const [score, setScore] = useState(0);
    const [instruction, setInstruction] = useState("Select Number")

    const handleShowError = () => {
        selectedNumeber ? setShowError(false) : setShowError(true);
    }

    const updateScore = (result) => {
        if (result === true) {
            setScore(score + selectedNumeber);
            setInstruction(`Hurray, ${selectedNumeber} is Give to you.. `);
        }
        else if (result === false) {
            setScore(score - 2);
            setInstruction(`Bad luck, -2 deducted from yout score`);

        }
        else if (result === 0) {
            setScore(0);
            setInstruction(`Select Number`);
        }
    }

    return (
        <div>
            {/* <div class="alert alert-primary" role="alert">
                This is a primary alert—check it out!
            </div> */}
            <div className={styles.numberContainer}>
                <div className={styles.score}>
                    <div className={styles.finalScore}>{score}</div>
                    <p>Total socre</p>
                </div>

                <div className={styles.scoreNumberselect}>
                    <div className={styles.error}>
                        {showError && "You have not selected any number"}
                    </div>
                    <div>
                        <ul className={styles.selectNumber}>
                            {numberList && numberList.map((num, index) => {
                                return <li className={(num === selectedNumeber ? styles.isSelected : "")} onClick={() => {
                                    setselectedNumeber(num);
                                    setShowError(false);
                                }} key={index}>{num}</li>
                            })}
                        </ul>
                    </div>

                    <p>{instruction}</p>
                </div>
            </div>

            {/* roll dice component */}
            <div>
                <DiceRoll selectedNumeber={selectedNumeber} ondiceRoll={handleShowError} setScore={updateScore} />
            </div>
        </div>
    )
}

export default Main
