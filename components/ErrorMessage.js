export default function ErrorMsg(props){
    return (
        <div style={{height:'30px'}}>
            <p style={{color:'red',margin: 0}}>{props.message}</p>
        </div>
    )
}