import { useLoaderData } from '@remix-run/react'
import { getPosts } from '~/models/post.server'
import ListadoPosts from '~/components/listado-posts'


// Exportaciones
export function meta() {
    return {
        title: 'GuitarLA - Nuestro Blog',
        description: 'GuitarLA, Blog de musica y venta de guitarras'
    }
}

export async function loader() {
    const posts = await getPosts()
    return posts.data
}

function Blog() {
    const posts = useLoaderData()
    return (
        <ListadoPosts
            posts={posts}
        />
    )

}

export default Blog;
