import { useDispatch } from 'react-redux'
// import useInterval from '../lib/useInterval'

import {useState} from 'react'
import Link from 'next/link'
import Counter from './components/counter'
import ChildOne from './components/childOne'

export default function Page(){
    const dispatch = useDispatch()

      // Tick the time every second
    // useInterval(() => {
    // dispatch({
    //   type: 'TICK',
    //   light: true,
    //   lastUpdate: Date.now(),
    //     })
    // }, 1000)


    const [hoge, setHoge] = useState("this is default")

    return (
        <div>
            <p>{hoge}</p>
            <Link href="/Page1">Page1</Link>
            <Link href="/Page2">Page2</Link>
            <Counter/>
            <ChildOne/>
        </div>
    )

}