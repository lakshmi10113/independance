console.log("timer started");
let colors = ["blue","green","red","yellow","violet","pink","maroon","orange","red"];
var count = 0;
var num = 10;

 const data = window.setInterval(() => {

        document.body.style.backgroundColor = colors[count];
        document.getElementById('text').innerHTML = num;
        if (count < colors.length || num != 0){
            count++;
            num--;
        }
        else{
            document.getElementById('text').innerHTML = `Happy Independence Day`;    
    }
    },1000);



setTimeout(()=>  clearInterval(data) , 12000);