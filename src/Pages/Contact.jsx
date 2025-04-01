import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../Schema/ContactSchema";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    alert("success");
    reset();
  };

  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control"
              type="text"
              name="username"
              required
              autoComplete="off"
              placeholder="Enter your name"
              {...register("username")}
            />
            {touchedFields.username && errors.username ? (
              <p className="text-red-500">{errors.username.message}</p>
            ) : null}
            <br />
            <input
              className="form-control"
              type="text"
              name="email"
              required
              autoComplete="off"
              placeholder="Enter your email"
              {...register("email")}
            />
            {touchedFields.email && errors.email ? (
              <p className="text-red-500">{errors.email.message}</p>
            ) : null}
            <br />
            <textarea
              className="form-control"
              name="message"
              row="10"
              required
              autoComplete="false"
              {...register("message")}
            ></textarea>
            {touchedFields.message && errors.message ? (
              <p className="text-red-500">{errors.message.message}</p>
            ) : null}
            <button type="submit" value="">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
