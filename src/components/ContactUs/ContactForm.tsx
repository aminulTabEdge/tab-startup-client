"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BsSendFill } from "react-icons/bs";
import Swal from "sweetalert2";

// Define the form input types
interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // Set up the React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  // Handle form submission
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form Data Submitted: ", data);
      await reset();
      Swal.fire({
        title: "Good job!",
        text: "Message Sent Successfully!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto  sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-5">
          {/* Name Input */}
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="mt-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className="mt-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              className="mt-2 h-32"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Butto n */}
          <Button
            type="submit"
            className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 transition-all"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"} <BsSendFill />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
