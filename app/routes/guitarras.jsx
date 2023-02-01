import { Outlet } from '@remix-run/react'
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
            <Outlet />
        </main>
    )
}

export default Tienda
