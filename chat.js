import { db } from "./firebase.js"
import { collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"

const chatBox = document.getElementById("messages")

window.sendMessage = async function(){

let text = document.getElementById("messageInput").value

await addDoc(collection(db,"messages"),{

text:text,
time:new Date().toLocaleTimeString()

})

document.getElementById("messageInput").value=""

}

onSnapshot(collection(db,"messages"),snapshot=>{

chatBox.innerHTML=""

snapshot.forEach(doc=>{

let m=doc.data()

let div=document.createElement("div")

div.className="message"

div.innerHTML=m.text+" <small>"+m.time+"</small>"

chatBox.appendChild(div)

})

})
