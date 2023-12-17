import { GeminiProVision } from "../services/gemini-pro-vision.js";

const GeminiProVisionController = async (req, res) => {
  try {
    const { textPrompt } = req.body;
    const result = await GeminiProVision(textPrompt);
    

    return res.status(200).json({
        status: "success",
        message: "Gemini Pro Vision API Data Fetched Successfully",
        data: result,
    })

  } catch (error) {
    return res.status(500).json({
        status: "error",
        message: "Something went wrong",
        error: error.message,
    })
  }
};

export { GeminiProVisionController };
