import styles from './Rules.module.css';

const Rules = () => {
  return (
    <div className={styles.rulesHeading}>
      <div>
        <h1>How to play dice game</h1>
      </div>

      <div className={styles.rules}>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After click on  dice  if selected number is equal to dice number, You will get same point as dice </p>
        <p>If you get wrong guess ,  then  2 point will be dedcuted </p>
      </div>
    </div>
  )
}

export default Rules
