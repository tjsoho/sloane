"use client";
import React, { useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { useRouter } from "next/navigation"; // Corrected import
import { Reveal } from "../components/Animations/Reveal";
import { SlideReveal } from "../components/Animations/SlideReveal";

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Handle successful form submission here
      console.log("Form submitted successfully!");
      setIsSubmitted(true);
      form.reset();

      // Redirect to the home page after a successful submission (assuming "/home" is your home page route)
      router.push("/home");
    } else {
      // Handle form submission errors here
      console.error("Form submission failed.");
    }
  };

  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          paddingTop: 16,
          paddingBottom: 16,
        }}
        className="bg-brand-green"
      >
        <SlideReveal>
          <h2 className="my-4 text-center text-5xl text-brand-logo lg:text-7xl">
            Let&apos;s Chat
          </h2>
        </SlideReveal>
        <Reveal>
          <Typography
            variant="h5"
            style={{ textAlign: "center", fontSize: "20px" }}
            className="px-16 text-brand-cream xl:px-32"
            gutterBottom
          >
            Feel free to share your thoughts or questions with us and we&apos;ll get
            back to you within 48hrs.
          </Typography>
        </Reveal>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: { xs: "50px", sm: "0 32px", lg: "0 64px", xl: "0 132px" },
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", sm: "center" },
          alignItems: "center",
        }}
        className="bg-brand-green"
      >
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="a8bc9187-f073-45fe-b457-d7848a0e31f0" // Replace with your actual Access Key
          />
          <h3 className="text-center font-Archivo text-3xl text-brand-logo lg:text-5xl">
            Contact Form
          </h3>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Business Name"
            name="name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={5}
            variant="outlined"
            margin="normal"
            required
          />
          <div style={{ display: "none" }}>
            <input type="checkbox" name="botcheck" />
          </div>
          <button
            type="submit"
            className="mt-4 rounded-full border-[1px] border-brand-green-dark  px-4 py-2 font-Archivo text-brand-cream hover:bg-brand-green-dark hover:text-brand-logo"
          >
            Send Message
          </button>
        </form>
        <p id="result" style={{ textAlign: "center" }}></p>
        {/* Display a pop-up message if the form is successfully submitted */}
        {isSubmitted && (
          <div className="popup">
            <Typography variant="h5">
              Thanks for getting in touch! We&apos;ll be in touch shortly.
            </Typography>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default ContactForm;
