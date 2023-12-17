import { genAI } from "../config/gemini-api-config.js";

async function fileToGenerativePart(buffer, mimeType) {
  return {
    inlineData: {
      data: buffer.toString("base64"),
      mimeType,
    },
  };
}

const GeminiProVision = async (textPrompt, fileBuffer) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt =
    textPrompt != ""
      ? textPrompt
      : "Craft an Insta-worthy caption that feels genuine and not too scripted. Imagine you're chatting with a friend about a cool moment. Go ahead, what would you say? 🌈📸";
  const imageParts = [await fileToGenerativePart(fileBuffer, "image/jpeg")];

  const result = await model.generateContent([prompt, ...imageParts]);

  const response = await result.response;

  const text = response.text();

  return text;
};

export { GeminiProVision };
