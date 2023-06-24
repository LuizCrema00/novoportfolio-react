import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
// import fotoSobreMim from 'assets/WhatsApp_Image_2023-06-18_at_5.50.31_PM-removebg-preview.png'

export default function SobreMim() {
  return (
    <PostModelo titulo="Sobre Mim" fotoCapa={fotoCapa}>
      <h3 className={styles.subtitulo}>
          Olá, eu sou o Luiz Guilherme Crema
      </h3>
      <p className={styles.paragrafo}>
      Tenho 23 anos e atualmente estou cursando o último ano do curso de Bacharelado em Engenharia de Software na Universidade Estadual de Ponta Grossa (UEPG), com término em dezembro de 2023.
      Meu foco principal é o desenvolvimento Front-End, o qual estudo há cerca de um ano. Como dev Front-End sou apaixonado por transformar ideias em realidade,
      possuo conhecimentos em ReactJs, HTML, CSS e JavaScript e estou constantemente buscando me aprofundar nesses temas, além de aprender novas linguagens e frameworks.
      </p>
      {/* <img src={fotoSobreMim} className={styles.fotoSobreMim} alt='foto Luiz Guilherme Crema' /> */}
    </PostModelo>
  )
}
