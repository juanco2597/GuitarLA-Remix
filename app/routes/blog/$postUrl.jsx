import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/post.server'
import { formatearFecha } from '~/utils/helpers'

export function meta({ data }) {
    if (!data) {
        return {
            title: 'Entr+ no encontrada',
            description: `Guitarras, venta de guitarras, guitarra no encontrada`
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
    }
}


export async function loader({ params }) {

    const { postUrl } = params
    const post = await getPost(postUrl)
    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }
    return post
}

export default function Post() {

    const post = useLoaderData()
    const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes
    return (
        <article className='post mt-3'>
            <img src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>
    )
}
