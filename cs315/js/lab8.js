const arrayElement = [];
    const form = document.getElementsByClassName(".form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const repassword = document.getElementById("Re-type password");
    const male = document.getElementById("male");
    const fname = document.getElementById("female");
    const country = document.getElementById("country");
    const agree = document.getElementById("agree");
    const newlet = document.getElementById("newlet");
    const erorElement = document.getElementById("error");
    for (let element of form.innerHtml) {
        let elementval = element.value;
        arrayElement.concat.push(elementval);

    }




    form.addEventListener("Registor", (e) => {


        for (let ele of arrayElement) {
            if (ele.length <= 2) {
                e.preventDefault();
                email.innerText = message.join(', ');

            }
        }
    });
