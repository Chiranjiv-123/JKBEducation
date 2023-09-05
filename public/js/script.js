function submitContact() {
    const contactform = document.getElementById("contact-form");
    contactform.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(contactform);
      const formDataObj = {};
      formData.forEach((value, key) => (formDataObj[key] = value));
      // console.log(formDataObj);
      const formStatus = document.querySelector(
        "#contact-form > div:last-of-type"
      );
      const name = formDataObj.name;
      const phone = formDataObj.phone.toString();
      const email = formDataObj.email;
      const address = formDataObj.address;
      const purpose = formDataObj.purpose;
      if (!name || !phone || !email || !address || !purpose) {
        formStatus.style.color = "orangered";
        formStatus.innerText = "Please Fill the Form Properly";
        formStatus.style.display = "flex";
        return;
      } else {
        formStatus.style.color = "lime";
        formStatus.innerText = "Form Submitted";
        formStatus.style.display = "flex";
      }
      const fetchUrl = window.location.origin + "/contact";
      // console.log(fetchUrl);
      fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formDataObj),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }
  submitContact();