import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

// Extend ImportMetaEnv to include the environment variables
interface ImportMetaEnv {
  VITE_APP_EMAILJS_SERVICE_ID: string;
  VITE_APP_EMAILJS_TEMPLATE_ID: string;
  VITE_APP_EMAILJS_PUBLIC_KEY: string;
}

// Declare the ImportMeta interface globally
declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLButtonElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = () => {
   setCurrentAnimation('walk');
  };

  const handleBlur = () => {
    setCurrentAnimation('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kurt Badillo",
          from_email: form.email,
          to_email: "badillokurt9@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "info" as const,
          });
        })
        .catch(() => {
          setIsLoading(false);
          setCurrentAnimation('idle');
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger" as const,
          });
        });
  
      setTimeout(() => {
        hideAlert();
        setCurrentAnimation("idle");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container ">
      {alert.show && <Alert {...alert} type={alert.type as "danger" | "info"} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Enter your message"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-350px]">
        <Canvas
          camera={{ 
            position: [0, 0, 5], 
            fov: 75, 
            near: 0.1, 
            far: 1000 
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              scale={[0.5, 0.5, 0.5]}
              rotation={[12.629, -0.6, 0]}
              currentAnimation={currentAnimation}
            />
            </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
