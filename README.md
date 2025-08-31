# AI-powered Meeting Notes Summarizer and Sharer

## 📌 Overview
The **AI-powered Meeting Notes Summarizer and Sharer** is a web application that helps teams **upload meeting transcripts or notes, automatically generate concise AI summaries, and share them easily**.  

It saves time by turning lengthy discussions into clear action points, highlights, and summaries that can be distributed across teams.

---

## ✨ Features
- 📂 **File Upload**: Upload meeting transcripts or notes.  
- 🤖 **AI Summarization**: Automatically generates concise summaries using AI.  
- 📝 **Custom Prompts**: Tailor summaries with your own prompts.  
- 📤 **Easy Sharing**: Share notes via the built-in sharing feature.  
- ⚡ **Real-time Processing** with a fast React + Vite frontend and Node.js backend.  

---

## 🏗️ Tech Stack
- **Frontend**: React (Vite, Tailwind CSS)  
- **Backend**: Node.js + Express  
- **AI**: OpenAI API (or any NLP model you configure)  
- **Package Manager**: Bun / npm  

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ambersoni33/AI-powered_meeting_notes_summarizer_and_sharer.git
cd AI-powered_meeting_notes_summarizer_and_sharer
```

### 2️⃣ Install dependencies

#### Client (React frontend)
```bash
cd client
bun install   # or npm install
```

#### Server (Node.js backend)
```bash
cd ../server
bun install   # or npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file inside the `server/` directory:

```
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

### 4️⃣ Run the project

#### Start the backend
```bash
cd server
bun start   # or npm start
```

#### Start the frontend
```bash
cd client
bun dev   # or npm run dev
```

The app will be available at:  
👉 `http://localhost:5173`

---

## 📂 Project Structure
```
AI-powered_meeting_notes_summarizer_and_sharer/
│── client/        # React + Vite frontend
│   ├── src/components/ (Upload, Summary, Share, Prompt)
│   ├── App.jsx
│   └── ...
│
│── server/        # Node.js backend (Express API)
│   ├── routes/
│   ├── app.js
│   └── ...
│
└── README.md
```

---

## 🛠️ Usage
1. Upload your meeting transcript or text.  
2. Enter a **custom prompt** if you want a specific summary style.  
3. Click **Generate Summary**.  
4. Review the AI-generated summary.  
5. Share it with your team using the sharing feature.  

---

## 📌 Roadmap
- [ ] Add support for **audio transcription** (speech-to-text).  
- [ ] Multi-language summarization.  
- [ ] Export summaries as **PDF/Word**.  
- [ ] Integration with **Slack/Email** for auto-sharing.  

---

## 🤝 Contributing
Contributions are welcome!  
- Fork the repo  
- Create a new branch (`feature/your-feature`)  
- Commit and push your changes  
- Create a Pull Request  

---

## 📜 License
This project is licensed under the **MIT License**.  
