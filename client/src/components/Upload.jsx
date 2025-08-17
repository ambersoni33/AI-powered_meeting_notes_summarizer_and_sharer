import { useState } from "react";

export const Upload = ({ setFileContent, setFileName}) => {

  const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader(); // create new instance
  reader.onload = () => {
    setFileContent(reader.result);
    setFileName(file.name);
    console.log("File content:", reader.result);
    console.log("File name:", file.name);
  };
  reader.onerror = (err) => {
    console.error("Error reading file:", err);
  };

  reader.readAsText(file); // read file as text
};
    return (
        <div>
            <label htmlFor="upload" className="mt-4">
        Upload your meeting transcript
      </label>
      <input type="file" accept=".txt" id="upload" 
      onChange={handleFileChange}
      className="bg-gray-200 border border-gray-300 rounded-md p-2 mt-2" />
        </div>
    )
}