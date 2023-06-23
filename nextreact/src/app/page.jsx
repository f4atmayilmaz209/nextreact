import Image from "next/image"
import Button from "../components/button/Button"
import styles from "./page.module.css"


export default function Home() {
  return (
   <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>Turning your Idea into Reality.We bring together the teams from the global tech industry</p>
        <Button url="/portfolio" text="See Our Works"></Button>
        <button className={styles.button}>See Our Works</button>
      </div>

      <div className={styles.item}>
        <Image width={500} height={500} src="https://images.pexels.com/photos/17170319/pexels-photo-17170319/free-photo-of-peyzaj-alan-yaz-gunes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className={styles.img}></Image>
      </div>
      
   </div>
  )
}
