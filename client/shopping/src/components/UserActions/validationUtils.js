let validateEmail = (data)=>
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data))
        {
           return true
        }
        else{
           return false
        }
    }
let validatePassword = (data)=>
    {
        if (/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)\S{5,}$/.test(data))
        {
            return true
         }
         else{
            return false
         }
    }
export let validateForm = (event, setState)=>{
        let validation = {}
        let flag = true;
        Object.keys(event.target).forEach((item)=>{
            if(!isNaN(item) && (event.target[item].nodeName==="INPUT" && event.target[item].name==="email"))
            {
                if(validateEmail(event.target[item].value))
                {
                    validation.email={valid:true,data:event.target[item].value}
                }
                else{
                    validation.email={valid:false,data:""}
                    flag = false;
                 }
            }
            else if(!isNaN(item) && (event.target[item].nodeName==="INPUT" && event.target[item].name==="password"))
            {
                if(validatePassword(event.target[item].value)){
                    validation.password={valid:true,data:event.target[item].value}
                }
                else{
                    validation.password={valid:false,data:event.target[item].value}
                    flag = false;
                }
            }
           else if(!isNaN(item) && (event.target[item].nodeName==="INPUT" && event.target[item].name==="cnfpassword"))
            {
                if(validation.password.data===event.target[item].value){
                    validation.cnfpassword={valid:true,data:event.target[item].value}
                }
                else{
                    validation.cnfpassword={valid:false,data:""}
                    flag = false;
                }
            }
            else if(!isNaN(item) && (event.target[item].nodeName==="INPUT")){
                validation[event.target[item].name] = {valid:true,data:event.target[item].value}
            }
        })
        setState(validation)
        return flag
    }