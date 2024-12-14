import { MessageForm } from "./components/MessageForm";
import { Toaster } from "react-hot-toast";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* <MessageForm /> */}
      <Toaster position="bottom-center" />
    </main>
  );
}
