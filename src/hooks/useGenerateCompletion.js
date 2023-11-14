import OpenAI from "openai";
import { useState } from "react";

export const useGenerateCompletion = () => {
  const openai = new OpenAI({
    /**
     * TODO: Use more secure way to store keys.
     * Refer to https://platform.openai.com/docs/quickstart?context=node
     */
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [completion, setCompletion] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);

  const generateCompletion = async ({ prompt, messages }) => {
    setLoading(true);

    const messagesArray = [
      {
        role: "system",
        content: prompt || "You are a helpful assistant.",
      },
      ...messages,
    ];

    try {
      const result = await openai.chat.completions.create({
        model: "gpt-4",
        messages: messagesArray,
      });

      setCompletion([
        ...messagesArray,
        ...result?.choices?.map((choice) => choice?.message),
      ]);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return {
    history: completion,
    isLoading,
    isError,
    generateCompletion,
  };
};
