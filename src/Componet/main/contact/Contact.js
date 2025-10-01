import React, { useEffect, useState } from 'react'
import "./contact.css"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { MdOutlineMail } from "react-icons/md";



export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [value, setValue] = useState("")

  const inpValue = (e) => {
     setValue(e.target.value)
   }
  const handleSubscribe = () => {
    console.log("Подписка на:", value);
    setValue(""); 
  };


 useEffect(()=>{
   const get = () => {
     fetch("http://localhost:5000/message").then((response) => {
       if (!response.ok) {
         throw new Error("chka patasxan Beckic")
       } return response.json()
     }).then((dataFile) => {
       console.log(dataFile);

     })
   }
   get()
 },[])
  const onsubmit = (data) => {
    fetch("http://localhost:5000/message", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
      if (!response.ok) {
        throw new Error("chstacvec poxancel Json")

      }
      alert("Your message has been sent!!!")
      return (response.json())
    }).then((info) => {
      console.log({ ...info });
      reset()

    })


  }
  return (
    <>
      <div className='subject'>
        <h2>Get the best offers first!</h2>
        <p>Join our newsletter.</p>
        <p>E-mail</p>
        <input type="email" placeholder='Your Email address' value={value} onChange={inpValue} />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>

      <div className='Contact'>
        <h2>Contact</h2>
        <p> <FaMapMarkerAlt /> Chicago. US</p>
        <p> <FaPhoneAlt /> Phohe:+00151515</p>
        <p> <MdOutlineMail /> Email:Razo0088@mail.ru</p>
        <form onSubmit={handleSubmit(onsubmit)}>
          <input type="text" placeholder='Name'  {...register("Name", { required: "fill in the fields name" })} />
          {errors.Name && <p style={{ color: "red" }}>{errors.Name.message}</p>}
          <input type="email" placeholder='Email' {...register("Email", { required: "fill in the fields Email" })} />
          {errors.Email && <p style={{ color: "red" }}>{errors.Email.message}</p>}
          <input type="text" placeholder='Message' {...register("Message", { required: "fill in the fields Message" })} />
          {errors.Message && <p style={{ color: "red" }}>{errors.Message.message}</p>}
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </>
  )
}
