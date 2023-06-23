import React from 'react'
import Image from "next/image"
import styles from "./page.module.css"
import {notFound} from "next/navigation"

async function getData(id){
  console.log(id)
  console.log("id")
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if(!res.ok){
    return notFound()
  }
  return res.json();
}
export async function generateMetadata({params}){
  const post=await getData(params.id)
  return{
    title:post.title,
    description:post.description
  }
}
const BlogPost = async ({params}) => {

  const data=await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
           {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/17033057/pexels-photo-17033057/free-photo-of-siyah-ve-beyaz-moda-gunes-gozlugu-kadin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost