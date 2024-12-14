// 'use client'

// import { useState } from 'react'
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Textarea } from '@/components/ui/textarea'
// import { PhoneNumberInput } from './PhoneNumberInput'

// export function MessageForm() {
//   const [phoneNumbers, setPhoneNumbers] = useState([])
//   const [message, setMessage] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Submitted:', { phoneNumbers, message })
//     // Here you would typically send the data to an API
//   }

//   return (
//     <Card className="w-full max-w-md">
//       <CardHeader>
//         <CardTitle className="text-center">Send Message</CardTitle>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         <CardContent className="space-y-4">
//           <PhoneNumberInput
//             phoneNumbers={phoneNumbers}
//             setPhoneNumbers={setPhoneNumbers}
//           />
//           <Textarea
//             placeholder="Enter your message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="min-h-[100px]"
//           />
//         </CardContent>
//         <CardFooter>
//           <Button type="submit" className="w-full">Submit</Button>
//         </CardFooter>
//       </form>
//     </Card>
//   )
// }

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { sendMessage } from "../utils/api";
import { toast } from "react-hot-toast";

export function MessageForm() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      console.log("Submitting form with:", { phoneNumbers, message });

      if (phoneNumbers.length === 0) {
        throw new Error("No phone numbers provided");
      }

      if (!message.trim()) {
        throw new Error("Message is empty");
      }

      const responses = await sendMessage(phoneNumbers, message);
      console.log("API Responses:", responses);
      toast.success("Messages sent successfully!");
      setPhoneNumbers([]);
      setMessage("");
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      let errorMessage = "Failed to send messages. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
        try {
          const parsedError = JSON.parse(error.message);
          errorMessage = `Error ${parsedError.status}: ${parsedError.statusText}`;
          if (parsedError.responseData) {
            errorMessage += ` - ${parsedError.responseData}`;
          }
        } catch (parseError) {
          // If parsing fails, use the original error message
        }
      }
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(isLoading, "isLoading");
  return (
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
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || phoneNumbers.length === 0 || !message.trim()}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
