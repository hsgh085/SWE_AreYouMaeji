import React from 'react';
import styles from './List.css'

export default function List({ children }) {
    return (
        <div className={styles.list}>
            {children}
        </div>
    );
}