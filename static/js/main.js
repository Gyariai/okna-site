const buttonOpen = document.getElementById("open")
const buttonClose = document.getElementById("close")
const menu = document.getElementById("menu")

buttonOpen.addEventListener("click", () => {
    menu.className = "menu-wrapper-phone open"

    setTimeout(() => {
        menu.className = "menu-wrapper-phone"  
    }, 300)

})

buttonClose?.addEventListener("click", () => {
    menu.className = "menu-wrapper-phone close"

    setTimeout(() => {
        menu.className = "menu-wrapper-phone none"
    }, 300)
    
})


const phone = document.getElementById("phone")
const text = document.getElementById("text")
const submit = document.getElementById("submit")


let phoneText = ""
let textareaText = ""


phone?.addEventListener("input", event => {
    phoneText = event.target.value
})

text?.addEventListener("input", event => {
    textareaText = event.target.value
})

submit?.addEventListener("click", event => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "phone": phoneText,
      "text": textareaText
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("/api/submit", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.status) {
            Toastify({
                text: "Сообщение отправлено. Скоро вам перезвоним.",
                duration: 3000,
                gravity: "top",
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();

            phone.value = ""
            text.value = ""
        } else {
            Toastify({
                text: "Пожалуйста введите номер телефона",
                duration: 3000,
                gravity: "top",
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "#F44336",
                },
            }).showToast();
        }
      })
      .catch((error) => {
       
      });
})

const up = document.getElementById("up")

up?.addEventListener("click", () => {
    scrollTo(0, 200)
})

function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}


if(window.pageYOffset < 500) {
    up.className = "up none_up"
} else {
    up.className = "up"
}

window.onscroll = function() {
    if(window.pageYOffset < 500) {
        up.className = "up none_up"
    } else {
        up.className = "up"
    }
}


const ahref = document.querySelectorAll('[data-id="phone_call"]')

const ahref_w = document.querySelectorAll('[data-id="phone_call_w"]')

for(let button of ahref) {
    if(window.innerWidth < 768) {
        button.style = "color: #ffb300"
    } else {
        button.style = "display: none;"
    }
}
for(let button of ahref_w) {
    if(window.innerWidth < 768) {
        button.style = "display: none;"
    } else {
        button.style = "color: #ffb300"
    }
}




window.addEventListener('resize',(e) => {
    for(let button of ahref) {
        if(window.innerWidth < 768) {
            button.style = "color: #ffb300"
        } else {
            button.style = "display: none;"
        }
    }
    for(let button of ahref_w) {
        if(window.innerWidth < 768) {
            button.style = "display: none;"
        } else {
            button.style = "color: #ffb300"
        }
    }
    
});


