import React from 'react'

function Contact() {
  const SendMail = (event) => {
    event.preventDefault();
    var formField = document.getElementById("contactForm");
    var formData = new FormData(formField);
    formField.reset();
    var dataPacket = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: "Portfolio reach out",
        message: formData.get("message")
    }
    fetch("https://nabinrekha.com.np/contact_backend.php",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPacket),
    }).then((response)=>response.text()).then((result)=>{
      if(result){
        window.alert("Message send successfully");
      }
    }).catch((error)=>{
      window.alert("Server is experiencing heavy traffic, try again later.");
      console.log(error);
    })
  }
  return (
    <>
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className='flex flex-col items-center justify-center mt-5'>
        <form id="contactForm" onSubmit={SendMail} className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
          <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700' htmlFor="Name">FullName</label>
            <input 
            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            type="text" 
            id="name"
            name="name" 
            placeholder="Enter your Name" />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700' htmlFor="email">Email Address</label>
            <input 
            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            type="email" 
            id="email" 
            name="email"
            placeholder="Enter your email address" />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700' htmlFor="message">Message</label>
            <textarea 
            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            type="text" 
            id="message" 
            name="message"
            placeholder="Enter your Message" />
          </div>
          <button className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-200'>Send</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact
// 1:35:00
