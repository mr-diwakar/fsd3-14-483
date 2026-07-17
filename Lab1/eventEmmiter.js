import{EventEmitter} from "node:events" ;
const task = new EventEmitter() ;
const sayHi = (name) =>{
    console.log(`loggedin ${name}`) ;
}

task.on('greet', sayHi)
task.on("greet" , () => {
    console.log("Logged Out") ;
}) ;
task.on("greet" , (name) =>{
    console.log(`sytem is shutting down by ${name}`) ;
})

task.emit('greet' , 'akhil singh') ;
task.emit("greet" , "sonia singh") ;
task.off("exit" , "manager") ;
