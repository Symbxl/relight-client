import styles from "../page.module.css"

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <p>
        Now servicing in
        <code className={styles.app}> Alberta, Canada!</code>
      </p>
    </div >
  )
}