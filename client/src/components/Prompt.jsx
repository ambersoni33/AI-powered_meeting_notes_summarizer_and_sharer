

export const Prompt = ({ prompt, setPrompt }) =>{
    
    return (
        <div>
             <label htmlFor="Prompt" className="mt-4">
        Prompt (optional)
      </label>
      <textarea id="Prompt" className="bg-gray-200 border border-gray-300 rounded-md p-2 mt-2" rows="3"  cols={100} 
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Enter your prompt here (optional)"
      ></textarea>

        </div>
    )
}