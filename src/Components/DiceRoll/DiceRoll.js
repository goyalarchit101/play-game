import { useState } from 'react';
import Button from '../Button/Button';
import Rules from '../Rules/Rules';
import styles from './Dice.module.css';
import generateRandomNumber from '../../utility/utility';
import { useNavigate } from 'react-router-dom';


const DiceRoll = ({ selectedNumeber, ondiceRoll, setScore }) => {
    const navigate = useNavigate();
    const [dice, setdice] = useState(1);
    const [showRules, setShowRules] = useState(false);

    const rollDice = () => {
        ondiceRoll();
        if (!selectedNumeber)
            return;
        const randomNumber = generateRandomNumber(dice);
        setdice(randomNumber);
        checkLuck(randomNumber);
    }

    const checkLuck = (randomNumber) => {
        if (selectedNumeber === randomNumber) {
            setScore(true);
        }
        else {
            setScore(false);
        }
    }

    return (
        <div className={styles.diceContainer}>
            <div className={styles.diceRoll}>
                <div>
                    <img onClick={rollDice} className={styles.cubicGambling} src={`dice_${dice}.png`} alt='' />
                </div>
                <div className={styles.click}>Click on Dice to roll</div>
                <div className={styles.buttonDir}>
                    <div>
                        <Button onButtonClick={() => { navigate('/'); }} isWhite={false} text={"Home"} />
                    </div>
                    <div>
                        <Button onButtonClick={() => { setShowRules(!showRules); }} isWhite={false} text={showRules ? "Hide Rules" : "Show Rules"} />
                    </div>
                    <div>
                        <Button onButtonClick={() => {
                             setdice(1);
                             setScore(0);
                                }
                             }
                            isWhite={true} text="Reset Score" />
                    </div>
                </div>

                <div>
                    {showRules && <Rules />}
                </div>
            </div>
        </div>

    )
}

export default DiceRoll
