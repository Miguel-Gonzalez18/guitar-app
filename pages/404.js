import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'
import Image from 'next/image'
import imagen404 from '../public/img/404.svg'

const NoEncontrado = () => {
    return (
        <Layout pagina='Pagina no encontrada'>
            <div className={styles.noEncontrado}>
                <Image src={imagen404} width={250} height={250} alt='Imagen 404' />
                <h1>Pagina no encotrada</h1>
                <Link href='/'>Volver al inicio</Link>
            </div>
        </Layout>
    )
}

export default NoEncontrado