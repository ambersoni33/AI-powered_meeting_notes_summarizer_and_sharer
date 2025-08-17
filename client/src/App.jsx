import { useState } from "react"
import { Prompt } from "./components/Prompt"
import { Share } from "./components/Share"
import { Summary } from "./components/Summary"
import { Upload } from "./components/upload"

const App = () => {
  const [fileContent, setFileContent] = useState("");
  const [fileName, setFileName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <>
    <h1 className="text-4xl font-bold text-gray-900 text-center mt-3">AI-powered meeting notes summarizer and sharer</h1>
    <div className=" bg-gray-100 h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <Upload fileContent={fileContent} setFileContent={setFileContent} fileName={fileName} setFileName={setFileName} />
        <Prompt prompt={prompt} setPrompt={setPrompt} />
        <Summary summary={summary} setSummary={setSummary} prompt={prompt} fileContent={fileContent} />
        <Share summary={summary} />
      </div>
    </div>
    </>
  )
}
export default App
