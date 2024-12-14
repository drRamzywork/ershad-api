// import React, { useState } from 'react'
// import { Input } from '@/components/ui/input'
// import { Badge } from '@/components/ui/badge'
// import { X } from 'lucide-react'

// export function PhoneNumberInput({ phoneNumbers, setPhoneNumbers }) {
//   const [inputValue, setInputValue] = useState('')

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value)
//   }

//   const handleInputKeyDown = (e) => {
//     if (e.key === 'Enter' && inputValue.trim() !== '') {
//       e.preventDefault()
//       addPhoneNumber()
//     }
//   }

//   const addPhoneNumber = () => {
//     if (inputValue.trim() !== '' && !phoneNumbers.includes(inputValue.trim())) {
//       setPhoneNumbers([...phoneNumbers, inputValue.trim()])
//       setInputValue('')
//     }
//   }

//   const removePhoneNumber = (numberToRemove) => {
//     setPhoneNumbers(phoneNumbers.filter(number => number !== numberToRemove))
//   }

//   return (
//     <div className="space-y-2">
//       <div className="flex flex-wrap gap-2">
//         {phoneNumbers.map((number, index) => (
//           <Badge key={index} variant="secondary" className="text-sm py-1 px-2">
//             {number}
//             <button
//               type="button"
//               onClick={() => removePhoneNumber(number)}
//               className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
//             >
//               <X size={14} />
//             </button>
//           </Badge>
//         ))}
//       </div>
//       <Input
//         type="tel"
//         placeholder="Enter phone number and press Enter"
//         value={inputValue}
//         onChange={handleInputChange}
//         onKeyDown={handleInputKeyDown}
//         onBlur={addPhoneNumber}
//       />
//     </div>
//   )
// }

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export function PhoneNumberInput({ phoneNumbers, setPhoneNumbers }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      addPhoneNumber();
    }
  };

  const addPhoneNumber = () => {
    if (inputValue.trim() !== "" && !phoneNumbers.includes(inputValue.trim())) {
      setPhoneNumbers([...phoneNumbers, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removePhoneNumber = (numberToRemove) => {
    setPhoneNumbers(phoneNumbers.filter((number) => number !== numberToRemove));
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {phoneNumbers.map((number, index) => (
          <Badge key={index} variant="secondary" className="text-sm py-1 px-2">
            {number}
            <button
              type="button"
              onClick={() => removePhoneNumber(number)}
              className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X size={14} />
            </button>
          </Badge>
        ))}
      </div>
      <Input
        type="tel"
        placeholder="Enter phone number and press Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onBlur={addPhoneNumber}
      />
    </div>
  );
}
