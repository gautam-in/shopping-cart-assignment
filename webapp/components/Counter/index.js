import {useState, useEffect} from "react";
import {PlusCircleOutlined, MinusCircleOutlined} from "@ant-design/icons";

export const Counter = ({setParentCount, preDefinedCount}) => {
    const [count, setCount] = useState();
    useEffect(() => {
            setCount(preDefinedCount ? preDefinedCount : 1)
        },[]);
    useEffect(() => {
        setParentCount(count)
    }, [count]);
    const increment = () => {
        setCount((currentCount) => currentCount + 1)
    }
    const decrement = () => {
        setCount((currentCount) => {
            if(currentCount !== 0) {
                console.log("decrement", currentCount)
                return currentCount - 1
            }
        })
    }

    return (
        <div style={{display: "flex", justifyContent: "space-evenly", width: "5vw"}}>
            <PlusCircleOutlined style={{fontSize: 15}} onClick={increment}/>
            <p style={{fontSize: 12}}>{count}</p>
            <MinusCircleOutlined style={{fontSize: 15}} onClick={decrement}/>
        </div>
    )
}