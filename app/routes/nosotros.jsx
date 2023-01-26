import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function meta() {
    return {
        title: 'GuitarLA - Sobre Nosotros',
        dercription: 'Venta de guitarras, blog de musica'
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="Guitarra" />

                <div>
                    <p className='text'>Aenean quis tellus quis elit accumsan molestie. Donec vel rhoncus est. Donec maximus ante id est auctor, vel tincidunt velit porttitor. Praesent finibus ullamcorper augue, eu ultrices orci fermentum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut faucibus magna vitae faucibus iaculis. Fusce sit amet commodo justo. </p>

                    <p className='text'>Aenean quis tellus quis elit accumsan molestie. Donec vel rhoncus est. Donec maximus ante id est auctor, vel tincidunt velit porttitor. Praesent finibus ullamcorper augue, eu ultrices orci fermentum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut faucibus magna vitae faucibus iaculis. Fusce sit amet commodo justo. </p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros;
