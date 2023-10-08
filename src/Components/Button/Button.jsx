

/* eslint-disable react/prop-types */
import styles from '././Button.module.css';


const Button = ({isWhite, text, onButtonClick}) => {
    return (
        <button onClick={()=>onButtonClick()} className={isWhite ? styles.whilteButton : styles.blackButton}>
            <p> {text}</p>
        </button>
    )
}

export default Button


