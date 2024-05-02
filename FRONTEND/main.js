class ToDo{
    async showdata(){
        let data = await fetch("http://localhost:7777/getdata")
        console.log(data)
        if(!data.ok){
            return alert("ERROR")
        }
        else{
            data = await data.json()
            console.log(data)
            // document.querySelector(".tabrow").appendChild(document.createElement("td").innerHTML = data.type)
        }
    }
    
    async add(){
        let data = {type: "", time: ""}
        try{
            data.type = document.querySelector("#type").value
            data.time = document.querySelector("#time").value
            await fetch("http://localhost:7777/add", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
            
            

        }catch(err){
            console.log("err")
        }
        
    }
    
    edit(){
        
    }
    
    remove(){

    }
}
let todo = new ToDo()
// fetch("iojjio", {
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//     },
//     method: "POST",
//     body: {}
// })
