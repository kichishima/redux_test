import {useState} from 'react'
import Link from 'next/link'

export default function Page2(){
    const [rojo, setRojo] = useState("this is Page2")
    return (
        <div>
            <p>{rojo}</p>
            <Link href="./Page">default</Link>
            <Link href="./Page1">Page1</Link>
        </div>
    )
}