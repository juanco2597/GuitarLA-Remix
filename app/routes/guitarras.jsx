import { Outlet, useOutletContext } from '@remix-run/react'
import styles from '~/styles/guitarras.css'


// Exportaciones de remix

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

// Componente
function Tienda() {

    return (
        <main className="contenedor">
            <Outlet
                context={useOutletContext()}
            />
        </main>
    )
}

export default Tienda
