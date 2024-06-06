import React from 'react'

function SendMail() {
    var formField = document.getElementById("contactForm");
    var formData = new FormData(formData);
    formField.reset();
    var dataPacket = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: "Portfolio reach out",
        message: formData.get("message")
    }
    console.log(dataPacket);
  return (
    true
  )
}

export default SendMail
