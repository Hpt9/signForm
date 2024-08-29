var clickCount = 1;
function nextForm() {
  if (clickCount < 4) {
    clickCount++;
    if (clickCount === 2) {
      document.querySelector(`.form-page-${clickCount}`).style.left = `64px`;
      document.querySelector(`.form-page-1`).style.left = `-10000px`;
      document.querySelector(".main-line1").style.width = "100%";
      setTimeout(() => {
        document.querySelector(".circle2").classList.add("circle-blue");
        document.querySelector(".circle2").classList.remove("circle-white");
        setTimeout(() => {
          document.querySelector(".main-line2").style.width = "50%";
        }, 200);
      }, 200);
      document.querySelector(".previous").style.opacity = "1";
      
    }
    if (clickCount === 3) {
      document.querySelector(`.form-page-${clickCount}`).style.left = `64px`;
      document.querySelector(`.form-page-2`).style.left = `-10000px`;
      document.querySelector(".main-line2").style.width = "100%";
      setTimeout(() => {
        document.querySelector(".circle3").classList.add("circle-blue");
        document.querySelector(".circle3").classList.remove("circle-white");
        setTimeout(() => {
          document.querySelector(".main-line3").style.width = "50%";
        }, 200);
      }, 200);
    }
    if (clickCount === 4) {
      document.querySelector(`.form-page-${clickCount}`).style.left = `64px`;
      document.querySelector(`.form-page-3`).style.left = `-10000px`;
      document.querySelector(".main-line3").style.width = "100%";
      setTimeout(() => {
        document.querySelector(".circle4").classList.add("circle-blue");
        document.querySelector(".circle4").classList.remove("circle-white");
      }, 400);
      document.querySelector(".next").style.opacity = "0";
      getAllData();
    }
  } else {
    return 1;
  }
}
function previousForm() {
  if (clickCount > 1) {
    clickCount--;
    if (clickCount === 1) {
      document.querySelector(`.form-page-${clickCount}`).style.left = `64px`;
      document.querySelector(`.form-page-2`).style.left = `10000px`;
      document.querySelector(".main-line2").style.width = "0%";
      setTimeout(() => {
        document.querySelector(".circle2").classList.remove("circle-blue");
        document.querySelector(".circle2").classList.add("circle-white");
        setTimeout(() => {
          document.querySelector(".main-line1").style.width = "50%";
        }, 200);
      }, 200);
      document.querySelector(".previous").style.opacity = "0";
      
    }
    if (clickCount === 2) {
      document.querySelector(`.form-page-${clickCount}`).style.left = `64px`;
      document.querySelector(`.form-page-3`).style.left = `10000px`;
      document.querySelector(".main-line3").style.width = "0%";
      setTimeout(() => {
        document.querySelector(".circle3").classList.remove("circle-blue");
        document.querySelector(".circle3").classList.add("circle-white");
        setTimeout(() => {
          document.querySelector(".main-line2").style.width = "50%";
        }, 200);
      }, 200);
    }
    if (clickCount === 3) {
      document.querySelector(`.form-page-${clickCount}`).style.left = `64px`;
      document.querySelector(`.form-page-4`).style.left = `10000px`;
      setTimeout(() => {
        document.querySelector(".circle4").classList.remove("circle-blue");
        document.querySelector(".circle4").classList.add("circle-white");
        setTimeout(() => {
          document.querySelector(".main-line3").style.width = "50%";
        }, 200);
      }, 200);
      document.querySelector(".next").style.opacity = "1";
    }
  } else {
    return 1;
  }
}
const works = new Set();
var user_name = "";
var user_email = "";
var user_telephone = "";
var user_company = "";
let budget = "";
function getAllData(params) {
  user_name = document.querySelector("#name").value;
  user_email = document.querySelector("#email").value;
  user_telephone = document.querySelector("#tel").value;
  user_company = document.querySelector("#company").value;
  const checkboxes = document.querySelectorAll(".chc");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      works.add(checkbox.value);
    }
  });
  const radioButtons = document.querySelectorAll('input[name="budget"]');
  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      budget = radioButton.value;
    }
  });
}
(function () {
  emailjs.init("1CsknYmQM9wGJvkuu");
})();

function sendEmail() {
  var params = {
    from_name: "Ferid",
    to: "feridsattarov5@gmail.com",
    message: `
        ${user_name},
        ${user_email},
        ${user_telephone},
        ${user_company},
        ${Array.from(works).join(",")},
        ${budget}
        `,
  };
  var service_id = "service_kjtepqf";
  var templateID = "template_8ivl2s9";
  emailjs
    .send(service_id, templateID, params)
    .then((res) => {
      console.log("email sent succesfuly");
    })
    .catch((err) => {
      console.log(err);
    });
}
