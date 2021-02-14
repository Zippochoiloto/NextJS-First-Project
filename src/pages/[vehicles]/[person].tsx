import { useRouter } from 'next/router'

export default function Person() {
    const router = useRouter();
    console.log('router', router.query)

    return <h2>{ router.query.vehicles} and {router.query.person}</h2>
}