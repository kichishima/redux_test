import {useState} from 'react'
import Link from 'next/link'

export default function Page(){
    const [hoge, setHoge] = useState("this is default")
    return (
        <div>
            <p>{hoge}</p>
            <Link href="/Page1">Page1</Link>
            <Link href="/Page2">Page2</Link>
        </div>
    )
}