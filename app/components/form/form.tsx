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

  async function createContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/contactEmail", {
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

      if (data.data.error) {
        toast({
          title: "Newsletter",
          className: "bg-red-500 text-white",
          description: "Un problème est servenu au moment de votre inscription",
        });
      } else {
        toast({
          title: "Newsletter",
          className: "bg-green-500 text-white",
          description: "Votre inscription a bien été prise en compte",
        });
      }
    } catch (error) {
      // sendEmail();
      toast({
        title: "Newsletter",
        className: "bg-red-500 text-white",
        description: "Un problème est servenu au moment de votre inscription",
      });
      console.error(error);
    }
  }

  async function sendEmail() {
    const res = await fetch("http://localhost:3000/api/sendEmail", {
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
    <section className="p-20 bg-black">
      <div className="h-[300px] w-full my-20">
        <div className="bg-[url('/images/pattern.jpg')] h-full w-full rounded-2xl object-cover">
          <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
            <h3 className="text-4xl text-white font-medium">
              Rejoignez ma newsletter pour ne rien manquer
            </h3>
            <form className="inline-flex w-1/3 gap-4" onSubmit={createContact}>
              <Input
                className="h-12 w-full focus-visible:ring-blue-700 ring-offset-blue-700"
                type="email"
                placeholder="Email"
                id="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="h-12 rounded-lg">
                Je m'inscris
                <ArrowRightIcon className="ml-3 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default form;
