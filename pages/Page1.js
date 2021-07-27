import {useState} from 'react'
import Link from 'next/link'
import Counter from './components/counter'
import ChildTwo from './components/childTwo'

export default function Page1(){
    const [piyo, setpiyo] = useState("this is page1")
    return (
        <div>
            <p>{piyo}</p>
            <Link href="/Page">default</Link>
            <Link href="/Page2">Page2</Link>
            <Counter/>
            <ChildTwo/>
        </div>
    )
}