let todo =[];
let req = prompt("Enter the Request");
console.log(req);
while(true){
    if(req=="quit"){
        console.log("quitiing app");
        break;
    }
     if(req=="list"){
        console.log("******************");
       for(let i=0;i<todo.length;i++){
        console.log(i, todo[i]);
       }
        console.log("*****************");
    }
    else if(req=="add"){
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let index = prompt("Enter the Index");
        todo.splice(index,1);
        console.log("task deleted");
    }
    req=prompt("Please Enter Your Request");

}