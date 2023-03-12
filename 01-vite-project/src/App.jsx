import { Header, Sidebar, Post } from "@Components/index"

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />

      <main>
      <Post />
      <Post />
      </main>
    </div>
    </>
  )
}

export default App
