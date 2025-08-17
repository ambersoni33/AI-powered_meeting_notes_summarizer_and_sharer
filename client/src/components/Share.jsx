import { useState } from "react"

export const Share = ({summary}) => {
    const [email,setEmail] = useState("");
    const handleShare = async () => {
        try {
      await fetch("https://ai-powered-meeting-notes-summarizer-and-iyu0.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,   // input email state
        summary: summary,   // your edited summary state
      }),
    });
    alert("Email sent successfully!");
  } catch (err) {
    console.error(err);
    alert("Failed to send email");
  }
    };
    return (
        <div>
           <label htmlFor="email" className="mt-4">
        Share via email
      </label>
      <input type="email" id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 border border-gray-300 rounded-md p-2 mt-2" placeholder="Enter your email" />
      <button 
      onClick={handleShare}
      className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600">Share</button>
        </div>
    )
}