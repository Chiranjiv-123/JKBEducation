
function popup(){
    const enroll = document.querySelector(".details div button");
    enroll.addEventListener('click',()=>{
        document.querySelector('#contact-popup').style.display = 'block';
        document.querySelector('#overlay').style.display = 'block';
    })
    const des = document.querySelector("#contact-popup > #cross");
    des.addEventListener('click',()=>{
        document.querySelector('#contact-popup').style.display = 'none';
        document.querySelector('#overlay').style.display = 'none';
    })

}
popup();