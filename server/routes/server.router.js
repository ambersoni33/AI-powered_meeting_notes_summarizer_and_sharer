
import {Router} from "express";
import nodemailer from "nodemailer";
import { GoogleGenerativeAI } from "@google/generative-ai";


const router = Router();




export const SummaryRouter = ({genAI})=>{
// Route for summarization
router.post("/summarize", async (req, res) => {
  try {
    const { fileContent, prompt } = req.body;
    

    // get model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // generate summary
    const result = await model.generateContent(`${prompt?prompt:"wrote neat and clean summary pointwise and easily understandable"}\n\n${fileContent}`);

    res.json({ summary: result.response.text() });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to summarize" });
  }
});

// Sending email Functionality
router.post("/send-email", async (req, res) => {
  const { email, summary } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // your gmail
        pass: process.env.EMAIL_PASSWORD, // app password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Summary of the last Transcript",
      text: summary,
    });

    res.json({ success: true, message: "Summary sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});
return router;
};


