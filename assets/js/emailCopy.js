function copyEmail() {
  const email = "allanmaciente06@gmail.com";
  navigator.clipboard.writeText(email);

  alert("Copied the text: " + email);
}
