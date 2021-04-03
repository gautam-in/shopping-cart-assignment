export default function Checkbox({toggle,name,value}) {
    return(
        <div style={{display:"flex",flexDirection:"row",fontSize:12,marginTop:"16px"}}>
            <input  type="checkbox" id="showpass" onChange={toggle} name={name} value={value} />
            <label for="showpass">{name}</label>
        </div> 
    )
    
} 