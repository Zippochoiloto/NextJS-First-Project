import Link from 'next/link'


const list = [
    { name: 'TheAnh', car: 'nvx' },
    { name: 'Test1', car: 'test2' }
]
export default function detail() {
    return <div>
        {list.map(e => (

            <div>
                <Link as={`/${e.name}/${e.car}`} href='/[vehicles]/[person]'>
                    <a>Navigate to {e.name} and {e.car}</a>
                </Link>
            </div>
        ))}
    </div>
}