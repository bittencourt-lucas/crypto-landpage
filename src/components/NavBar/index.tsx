import styles from './styles.module.scss'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <h1>Logo</h1>
      <div>
        <span>Download</span>
        <span>NFTs</span>
        <span>Newsletter</span>
        <span>FAQ</span>
      </div>
    </div>
  )
}