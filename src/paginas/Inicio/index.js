import React from 'react'

import styles from './Inicio.module.css'
import posts from 'json/posts.json'
import Post from 'componentes/PostCard'
import Banner from 'componentes/Banner'

export default function Inicio() {
  return (
    <>
      <Banner />
      <h2 className={styles.titulo}>Projetos</h2>
      <ul className={styles.posts}>
          {posts.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
      </ul>
    </>
      

  )
}
