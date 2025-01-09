export const defaultGetConfig ={

}

export const defaultPostConfig =()=>{
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginDetail),
    
}

export const defaultDeleteConfig = {}
