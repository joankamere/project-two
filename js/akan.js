var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];
  //prevent refresh on form submit
  var form = document.getElementById("myForm");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);
}