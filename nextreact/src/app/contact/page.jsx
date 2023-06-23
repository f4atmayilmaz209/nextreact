import React from 'react'
import styles from "./page.module.css"
import Image from "next/image"
import Button from '../../components/button/Button'


export const metadata = {
  title: 'Fatma Dev Contact Information',
  description: 'this is contact page',
}
const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill={true} className={styles.image}></Image>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input}/>
          <input type="text" placeholder='email' className={styles.input}/>
          <textarea className={styles.textArea} placeholder="message" cols="30" rows="10"></textarea>
          <Button url="#" text="Send"></Button>
        </form>
      </div>
     
    </div>
  )
}

export default Contact