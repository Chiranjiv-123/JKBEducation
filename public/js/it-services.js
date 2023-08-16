
function stacks(){
    const stack = ["React JS","Tailwind","Node JS","Java","Python","Flutter","Kotlin","Docker","SwiftUI","MongoDB"]
    let d = document.querySelector(".middle-stacks")
    for (const i of stack){
        d.innerHTML += `  <div class="stack">
                            ${i}
                           </div>`

    }

    
}
stacks();