"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import  from "@/components/PhoneNumberInput";
// import PhoneNumberInput from "./components/PhoneNumberInput";
import { PhoneNumberInput } from "./components/PhoneNumberInput";

export default function Home() {
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { phoneNumbers, message });
    // Here you would typically send the data to an API
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Send Message</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <PhoneNumberInput
              phoneNumbers={phoneNumbers}
              setPhoneNumbers={setPhoneNumbers}
            />
            <Textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
