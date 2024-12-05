// Closure
function MyFunction (MyNewFunc){
    console.log("Hello Yogita")
    MyNewFunc()
}

function MyNewFunc (){
    console.log("Hello world")
}

MyFunction(MyNewFunc)

