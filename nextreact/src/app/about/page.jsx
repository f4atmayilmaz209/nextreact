import React from 'react'
import Image from "next/image"
import Button from '../../components/button/Button'
import styles from "./page.module.css"

const About = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/10553761/pexels-photo-10553761.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill={true} alt='' className={styles.img}></Image>
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
      </div>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>

        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio excepturi mollitia totam, consequuntur cum, perspiciatis tempora consequatur amet nobis sint libero doloribus nostrum in tenetur, ipsum deleniti numquam explicabo?
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione unde distinctio nemo exercitationem consectetur aliquid iusto, aperiam ipsa sapiente at quaerat doloremque, porro autem, aspernatur laudantium inventore modi beatae sed?</p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatem laborum quis voluptate amet numquam porro architecto. Hic nostrum, veritatis architecto accusantium, porro illo sequi tempore quidem similique corporis qui.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis ad odio et ullam maiores, suscipit beatae deserunt excepturi dolorem voluptatum id ea magni nisi, neque quam assumenda. Adipisci, nihil?
            <br />- Dynamic Websites
            <br />
            <br />- Fast and Handy
            <br />
            <br />- Mobile Apps
            <br />
        </p>
        <Button url="/contact" text="Contact"></Button>
      </div>
    </div>
  </div>
  )
}

export default About