import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarrras from '~/components/listado-guitarras'

// Exportaciones de remix

export function meta() {
    return {
        title: 'GuitarLA - Tienda de Guitarras',
        description: 'GuitarLA - Nuestra coleccion de guitarras'
    }
}

export async function loader() {
    const guitarras = await getGuitarras()
    return guitarras.data
}


// Componente
function Tienda() {
    const guitarras = useLoaderData()
    return (
        <ListadoGuitarrras
            guitarras={guitarras}
        />

    )
}

export default Tienda
