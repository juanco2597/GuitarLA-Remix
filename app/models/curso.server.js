export async function getCurso() {
    const respuesta = await fetch(`${process.env.API_URL}/Curso?populate=Imagen`)
    return await respuesta.json()
}