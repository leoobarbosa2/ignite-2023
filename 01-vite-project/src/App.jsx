import { Header, Sidebar } from "@Components/index"

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />

      <main>
      <div>
        <p>Leonardo</p>
        <span>Lorem ipsum dolor, 
          sit amet consectetur adipisicing elit.
           Voluptates in cum culpa rerum porro amet veritatis
           tempora quidem cumque esse, repellendus eveniet hic error. 
           Recusandae voluptatibus id aut esse pariatur.
           </span>
      </div>

      <div>
        <p>Leonardo</p>
        <span>Lorem ipsum dolor, 
          sit amet consectetur adipisicing elit.
           Voluptates in cum culpa rerum porro amet veritatis
           tempora quidem cumque esse, repellendus eveniet hic error. 
           Recusandae voluptatibus id aut esse pariatur.
           </span>
      </div>
      </main>
    </div>
    </>
  )
}

export default App
