let output = document.getElementById('output');
window.addEventListener('load', function () {
let buttons = document.getElementsByClassName('tool-button');
console.log(buttons.length);
for (let btn of buttons){
//    console.log(btn);
    btn.addEventListener('click',() => {
        let cmd = btn.dataset['command'];
        if(cmd === "createLink"){
            let url = prompt("Enter the link here", "http:\/\/");
            document.execCommand(cmd,false,url);
        }
        else
            document.execCommand(cmd,false,null);
    }
    )
}
})