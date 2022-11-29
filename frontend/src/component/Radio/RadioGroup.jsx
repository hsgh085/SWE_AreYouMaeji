import RadioContext from "../../../../../../Downloads/project-heeseon/project-heeseon/src/context/RadioContext";
import styles from './RadioGroup.module.css'

export default function RadioGroup({ children, ...rest }) {
  return (
    <div className={styles.radioGroup}>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </div>
  );
}
