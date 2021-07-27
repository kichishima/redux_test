import { useSelector, useDispatch } from 'react-redux'

const useCounterSub = () => {
    // stateの呼び出し方
  const countsub = useSelector((state) => state.count)
    // dispatch
  const dispatch = useDispatch()
  const double = () =>
    dispatch({
      type: 'DOUBLE',
    })
  const halfRemainder = () =>
    dispatch({
      type: 'HALFREMAIN',
    })

  return { countsub, double, halfRemainder}
}


const CounterSub = () => {
    const { countsub, double, halfRemainder} = useCounterSub()
    return (
        <div>
        <h1>
          Countsub: <span>{countsub}</span>
        </h1>
        <button onClick={double}>x2</button>
        <button onClick={halfRemainder}>%2</button>
      </div>
    )
}

export default CounterSub 