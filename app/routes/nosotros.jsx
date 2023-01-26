import imagen from '../../public/img/nosotros.jpg'

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="" />

                <div>
                    <p>Aenean quis tellus quis elit accumsan molestie. Donec vel rhoncus est. Donec maximus ante id est auctor, vel tincidunt velit porttitor. Praesent finibus ullamcorper augue, eu ultrices orci fermentum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut faucibus magna vitae faucibus iaculis. Fusce sit amet commodo justo. Cras bibendum vel dui nec dignissim. Donec commodo ipsum ut semper bibendum. Integer vehicula aliquam massa, eu gravida massa tristique eget. Curabitur ut tellus elit. Pellentesque accumsan consequat mi, eu facilisis magna consectetur in. Quisque viverra pretium sodales. Aenean ac lorem ligula.</p>

                    <p>Aenean quis tellus quis elit accumsan molestie. Donec vel rhoncus est. Donec maximus ante id est auctor, vel tincidunt velit porttitor. Praesent finibus ullamcorper augue, eu ultrices orci fermentum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut faucibus magna vitae faucibus iaculis. Fusce sit amet commodo justo. Cras bibendum vel dui nec dignissim. Donec commodo ipsum ut semper bibendum. Integer vehicula aliquam massa, eu gravida massa tristique eget. Curabitur ut tellus elit. Pellentesque accumsan consequat mi, eu facilisis magna consectetur in. Quisque viverra pretium sodales. Aenean ac lorem ligula.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros;
