import styles from './styles/page.module.css'
import Menu from './components/menu'
import Landing from './components/landing'

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      <Landing />
    </main>
  )
}
