function aboutUS(){
    const obj = {
        1:{
            name:"Prof Vinayak Shete",
            post:"Director",
            desc:"Mr. Vinayak Shete, the visionary director and esteemed lecturer at JKB Educational & IT Services , has positively influenced the lives of thousands of aspiring engineers with his vast teaching experience and deep-rooted passion for yoga and meditation.",
            // image:
        },
        2:{
            name:"Prof N H Dubey",
            post:"Author",
            desc:"Prof. N H Dubey is a renowned Author who has written many textbooks like Engg. Mechanics, and Engg. Drawing/Graphics. With his vast teaching experience and expertise, he has left a lasting impact on the engineering journey of numerous students. "
        },
        3:{
            name:"Ms Poonam",
            post:"Director",
            desc:`
            Director at JKB & Trainer of Cloud Computing & DevOps Courses, A
            seasoned cloud development consultant with extensive expertise in
            architecting scalable and secure cloud solutions, providing
            strategic guidance to businesses for optimal cloud adoption and
            maximizing operational efficiency.
          `

        },
        4:{
            name:"Amol More",
            post:"Professor",
            desc:"Amol Mane, an Engineering Graduate from VJTI, Mumbai is an expert faculty who provides coaching for 1st year Engg. subjects and competitive exams like GATE. Moreover, he is a working professional in the construction industry. "
        },
        5:{
            name:"Abhishek Satre",
            post:"Sr Manager(Full stack dev)",
            desc:"Abhishek Satre is a Sr. Manager having 6+ years of working experience in the IT industry as a Full-Stack Web Developer. He is a master trainer for the Industrial Courses at JKB."
        },
        6:{
            name:"Anand Dubey",
            post:"Sr Manager(Mobile App dev)",
            desc:"Anand Dubey is a working IT professional and an expert Mobile Application Developer. Moreover, he is a master trainer for the Industrial Courses at JKB. "
        }
    }
    let box = document.querySelector(".professors");
    
    for(const i in obj){
        box.innerHTML += `<div class="boxes">
        <div class="photo">
          
        </div>
        <div class="content">
          <div class="Names">
            ${obj[i]['name']}
          </div>
          <div class="post">
            ${obj[i]['post']}
          </div>
          <div class="desc">
            ${obj[i]['desc']}
          </div>
              
        </div>
      </div>`
    }
}
aboutUS();