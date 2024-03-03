"use client";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

type FormInput = {
  email: string;
};

const form = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function createContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const res = await fetch("/api/contactEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (!res.ok) {
        throw new Error("HTTP error, status = " + res.status);
      }

      const data = await res.json();
      setIsLoading(true);

      if (data.data.error) {
        toast({
          title: "Newsletter",
          className: "bg-red-500 text-white",
          description: "Un problème est servenu au moment de votre inscription",
        });
      } else {
        // sendEmail();
        toast({
          title: "Newsletter",
          className: "bg-green-500 text-white",
          description: "Votre inscription a bien été prise en compte",
        });
        setIsLoading(true);
      }
    } catch (error) {
      toast({
        title: "Newsletter",
        className: "bg-red-500 text-white",
        description: "Un problème est servenu au moment de votre inscription",
      });
      console.error(error);
    }
  }

  async function sendEmail() {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
  }

  return (
    <section className="bg-slate-100">
      <div className=" w-full">
        <div className="bg-[url('/images/pattern.jpg')] bg-cover h-full w-full object-cover py-20">
          <div className="container h-full flex flex-col justify-center gap-10 items-center">
            <div className=" w-full">
              <h3 className="text-4xl leading-snug text-white font-medium text-center ml-4">
                Ta peau est à un clic de te remercier. Je teste et te partage
                les meilleurs produits pour homme par email.
              </h3>
            </div>
            <div className="flex justify-start w-full">
              <form
                className="flex px-5 w-full mx-auto md:w-[550px]  gap-4"
                onSubmit={createContact}
              >
                <Input
                  className="h-12 w-full focus-visible:ring-blue-700 ring-offset-blue-700"
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  className="h-12 rounded-lg"
                  disabled={isLoading}
                >
                  Je m'inscris
                  <ArrowRightIcon className="ml-3 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default form;
