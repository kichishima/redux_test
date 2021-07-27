import Counter from "./counter"
import GrandchildOne from "./grandchildOne"

export default function ChildOne(){
    return (
        <div>
            <p>this is child ONE</p>
            <Counter/>
            <GrandchildOne/>
        </div>
    )
}