import {useState, useEffect} from "react";
import {PlusCircleOutlined, MinusCircleOutlined} from "@ant-design/icons";

export const Counter = (props) => {
    const { setParentCount } = props;
    const [count, setCount] = useState(1);
    useEffect(() => {
        setParentCount(count)
    }, [count])
    const increment = () => {
        setCount((currentCount) => currentCount + 1)
    }
    const decrement = () => {
        setCount((currentCount) => {
            if(currentCount !== 0) {
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