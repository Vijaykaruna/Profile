
export const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      }
    )
    .then(
      () => {
        alert("Message sent successfully");
      },
      (error) => {
        alert("Failed to send message");
        console.log(error);
      }
    );
};