import React from 'react'
import Layout from '../components/Layout'
import Listado from '../components/Listado'

const tienda = ({guitarras}) => {
    return (
        <Layout pagina='Tienda virtual'>
            <main className='contenedor'>
                <h1 className='heading'>Nuestra coleccion</h1>

                <Listado 
                    guitarras={guitarras}
                />
            </main>
        </Layout>
    )
}

export async function getServerSideProps(){
    const url = `${process.env.API_URL}/guitarras?_sort=createdAt:DESC`
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()

    return {
        props: {
            guitarras
        }
    }
}

export default tienda