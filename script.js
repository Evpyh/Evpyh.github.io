const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

let intro=document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 500)
        })

        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000)

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)
    })
})

document.addEventListener('DOMContentLoaded', 
    function(){
      Typed.new('.nav-menu', {
        strings: ["menu"],
        typeSpeed: 1.5
      });
  });

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const key = "zvhFLhmhEBFmuON2F"
  const serviceID = "service_55eanqg";
  const templateID = "template_hujex55";

  emailjs.sendForm(serviceID, templateID, this, key).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
      document.querySelector("#from_name").value = "";
      document.querySelector("#message").value = "";
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
