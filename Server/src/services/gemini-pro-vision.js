import { genAI} from "../config/gemini-api-config.js";
import fs from  'fs'



function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType
      },
    };
  }


const GeminiProVision = async (textPrompt) => {

    const model = genAI.getGenerativeModel({model: "gemini-pro-vision"})

    const prompt = textPrompt || 'what is in this image?';

    const imageParts = [
        fileToGenerativePart('./assets/image.jpg', 'image/jpeg')
    ]

    const result = await model.generateContent([prompt, ...imageParts])

    const response = await result.response;

    const text = response.text();

    console.log(text)

    return text;
    
}


export { GeminiProVision };