import PostModelo from 'componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './Formacoes.module.css'

import React from 'react'

export default function Formacoes() {
  return (
    <PostModelo titulo="Formações" fotoCapa={fotoCapa} >
        <h3 className={styles.subtitulo}>Certificados</h3>
        <p className={styles.paragrafo}>Formação HTML E CSS - Escola Alura: Carga horária de 65 horas</p>
        <p className={styles.paragrafo}>Formação Desenvolva aplicações Web com JavaScript - Escola Alura: Carga horária de 60 horas</p>
        <p className={styles.paragrafo}>Formação Desenvolva aplicações Web acessíveis - Escola Alura: Carga horária de 20 horas</p>
        <p className={styles.paragrafo}>Layouts Responsivos: trabalhando com layouts mobile - Escola Alura: Carga horária de 7 horas</p>
        <p className={styles.paragrafo}>React: comece seu projeto full stack - Escola Alura: Carga horária de 12 horas</p>
        <p className={styles.paragrafo}>React: como os componentes funcionam - Esola Alura: Carga horária 8 horas</p>
        <p className={styles.paragrafo}>React: desenvolvendo com JavaScript - Escola Alura: Carga horária 14 horas</p>
        <p className={styles.paragrafo}>React: desenvolvendo em React Router com JavaScript - Escola Alura: Carga horária 8 horas</p>
        <p className={styles.paragrafo}>Laravel: criando uma aplicação com MVC- Escola Alura: Carga horária de 8 horas</p>
        <p className={styles.paragrafo}>Git e Github: repositório, commit e versões- Escola Alura: Carga horária de 8 horas</p>
        <h4 className={styles.subtitulo}>Experiência</h4>
        <p className={styles.paragrafo}>Programador na empresa ELC Automação Industrial Fev 2018 - Fev 2021</p>
        <p className={styles.paragrafo}>Em busca da primeira oportunidade com Desenvolvimento Web</p>
    </PostModelo>
  )
}
