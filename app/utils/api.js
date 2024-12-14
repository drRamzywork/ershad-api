// export async function sendMessage(phoneNumbers, message) {
//   const API_URL = "https://wc.rmz.one/whatsapp/api/v1/message/text/send";
//   const token = "29|2TpKMIdwQkdv31IwsZ7Xjogk3y24ajtpH5imELWzd2dfdb72"; // Replace with actual token retrieval logic

//   if (!token) {
//     throw new Error("Authorization token is missing.");
//   }

//   const requests = phoneNumbers.map(async (phoneNumber) => {
//     const requestBody = {
//       receiver: phoneNumber,
//       text: message,
//     };

//     console.log("Request body:", JSON.stringify(requestBody));

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         maxBodyLength: Infinity,
//         url: "https://wc.rmz.one/whatsapp/api/v1/message/text/send ",

//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(requestBody),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           JSON.stringify({
//             status: response.status,
//             statusText: response.statusText,
//             responseData: errorData,
//           })
//         );
//       }

//       return await response.json();
//     } catch (error) {
//       console.error(`Error sending message to ${phoneNumber}:`, error);
//       throw error;
//     }
//   });

//   return Promise.all(requests);
// }
export async function sendMessage(phoneNumbers, message) {
  const API_URL = "/api/v1/message/text/send";
  const token = "29|2TpKMIdwQkdv31IwsZ7Xjogk3y24ajtpH5imELWzd2dfdb72"; // Replace with your actual token
  const session_id = "ffe86c94-ea52-40a5-b4fe-7082f0af43f0"; // Replace with your session ID

  if (!token || !session_id) {
    throw new Error("Authorization token or session ID is missing.");
  }

  try {
    const requests = phoneNumbers.map(async (phoneNumber) => {
      const requestBody = {
        session_id,
        receiver: phoneNumber,
        text: message,
      };

      console.log("Request body:", JSON.stringify(requestBody));

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        throw new Error(
          JSON.stringify({
            status: response.status,
            statusText: response.statusText,
            responseData: errorData,
          })
        );
      }

      return await response.json();
    });

    return Promise.all(requests);
  } catch (error) {
    console.error("Error sending messages:", error);
    throw error;
  }
}
