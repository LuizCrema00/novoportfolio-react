import styles from './Banner.module.css'
import React from 'react'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/WhatsApp_Image_2023-06-18_at_5.50.31_PM-removebg-preview.png'
import curriculo from 'assets/CV_Luiz_Guilherme_Crema.pdf'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}>
           Front-End Developer.
          </h1>

          <p className={styles.paragrafo}>
          Olá! Sou Luiz Guilherme Crema, desenvolvedor Front-end com especialidade em ReactJs, HTML, CSS e JavaScript. E esse é o meu portólio. Quer saber mais sobre mim?
          </p>
          <p className={styles.paragrafo}>Acesse minhas redes:</p>
          <div className={styles.redes}>
              <a className={styles.link} href="https://www.linkedin.com/in/luiz-guilherme-crema-18410438/" target='_blank'>
              LinkedIn
              </a>
              <a className={styles.link} href="https://github.com/LuizCrema00" target='_blank'>
              GitHub
              </a>
              <a className={styles.link} href={curriculo} download="CV_Luiz_Guilherme_Crema.pdf">
              Baixar CV
              </a>
          </div>
          
        </div>
        <div className={styles.imagens}>
            <img className={styles.circuloColorido} 
                 src={circuloColorido}
                 alt='circulo colorido'
            />
            <img className={styles.minhaFoto} 
                 src={minhaFoto}
                 alt='Foto Luiz Guilherme Crema de braços cruzados'
            />
        </div>
        

    </div>
    
  )
}
