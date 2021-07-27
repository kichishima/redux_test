import Counter from "./counter"
import CounterSub from "./counterSub"
import GrandchildTwo from "./grandchildTwo"
export default function ChildTwo(){
    return(
        <div>
            <p>this is child Two (Counter Sub)</p>
            <CounterSub/>
            <GrandchildTwo/>
        </div>
    )
}