import React from 'react'
import styles from './index.module.css'

export default function Loading() {
  return (
    <div className={styles['loading-container']}>
      <div className={styles['loading']}></div>
      <div className={styles['loading-text']}>loading</div>
    </div>
  )
}
