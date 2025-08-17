import { useState } from "react";

export const Summary = ({ summary, setSummary,prompt, fileContent}) => {
    const [loading, setLoading] = useState(true);
    const handleSummary = async () => {
        //setLoading(false);
        try {
            const response = await fetch("https://ai-powered-meeting-notes-summarizer-and-iyu0.onrender.com/summarize", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fileContent: fileContent,
                    prompt: prompt,
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setSummary(data.summary);
        } catch (error) {
            console.error("Error summarizing:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
           
            <button className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600" onClick={handleSummary}>Summarize</button>
             <div className="mt-4">
                <h3>{loading ? "Loading..." : ""}</h3>
          <h2 className="text-2xl font-bold text-gray-900">
            Summary
            </h2>
          <p className="text-gray-700">
            Your summarized meeting notes will appear here.
            </p>

          <textarea name="summary" id="summary" 
            value={summary}
             onChange={(e) => setSummary(e.target.value)}
             placeholder="Summary is editable"
          className="bg-gray-200 border border-gray-300 rounded-md p-2 mt-2"
           rows="4"
            cols={100}></textarea>
      </div>
        </div>
    )
}