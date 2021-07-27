import { func } from "prop-types";
import CounterSub from "./counterSub";

export default function GrandchildTwo(){
    return (
        <div>
            <p>this is grandchild Two (couter sub)</p>
            <CounterSub/>
        </div>
    )
}