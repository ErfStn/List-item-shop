import { useState } from "react";

const HookObject = () => {
    const [user, setUser] = useState({ firstName: "", lastName: "" })
    const firstnameValue = (e) => {
        setUser({...user,firstName:e.target.value}) //=> miaym ba ...user ye copy migirim ta ta maghadir hamdige 0 nashe 
    }
    const lastnameValue = (e) => {
        setUser({...user,lastName:e.target.value})
    }
    return (
        <form>
            <input type="text"value={user.firstName} onChange={firstnameValue}></input>
            <input type="text"value={user.lastName} onChange={lastnameValue}></input>
            <h3>my name is : {user.firstName}</h3>
            <h3>my last name is : {user.lastName}</h3>
        </form>
    )
}
export default HookObject;