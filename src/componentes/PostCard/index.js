import styles from './Post.module.css'
import React from 'react'

export default function Post({ post }) {
  return (
    <div className={styles.post}>
        <img
            className={styles.capa}
            src={`assets/posts/${post.id}/capa.png`}
            alt='imagem de capa do post'
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <a href={post.link} target="_blank" className={styles.botaoLer}>Visualizar</a>
        <p className={styles.descricao}>Tecnologias utilizadas: {post.tecnologias}</p>
    </div>
  )
}
