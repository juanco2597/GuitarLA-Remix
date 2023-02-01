// Importaciones 
import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'


// Exportaciones
export async function loader({ params }) {

    const { guitarrasUrl } = params
    const guitarra = await getGuitarra(guitarrasUrl)

    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }
    return guitarra
}

export function meta({ data }) {
    if (!data) {
        return {
            title: 'Guitarra no encontrada',
            description: `Guitarras, venta de guitarras, guitarra no encontrada`
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
    }
}

function Guitarra() {

    const guitarra = useLoaderData()
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

    return (
        <div className='guitarra'>
            <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} className='imagen' />

            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">${precio}</p>
            </div>
        </div>
    )
}

export default Guitarra;
