"use client";
import { MessageList } from "react-chat-elements";
import { useEffect, useMemo, useState } from "react";
import { useGenerateCompletion } from "@/hooks/useGenerateCompletion";
import { RefinancePrompt } from "@/prompts/refinance";
import Image from "next/image";

export default function Refinance() {
  const { history, generateCompletion, isLoading, isError } =
    useGenerateCompletion();
  const [chatText, setChatText] = useState("");
  const [dataSources, setDataSources] = useState([]);

  const chatHistory = useMemo(() => {
    const chatHistory = history
      ?.filter((choice) => choice?.role !== "system")
      .map((choice) => {
        const role = choice?.role;
        const content = choice?.content;

        return {
          position: role === "user" ? "right" : "left",
          type: "text",
          title: role,
          text: content || "",
        };
      });

    return chatHistory;
  }, [history]);

  // Handle Enter Key
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      if (!chatText) return;
      /** Append new chat to the conversation */
      setDataSources(
        chatHistory.concat({
          position: "right",
          type: "text",
          title: "user",
          text: chatText,
        })
      );

      const messages = history.concat({ role: "user", content: chatText });
      generateCompletion({ prompt: RefinancePrompt, messages: messages });

      setChatText("");
    }
  };

  // Handle Button Click
  const handleBtnClick = (e) => {
    if (!chatText) return;
    /** Append new chat to the conversation */
    setDataSources(
      chatHistory.concat({
        position: "right",
        type: "text",
        title: "user",
        text: chatText,
      })
    );

    const messages = history.concat({ role: "user", content: chatText });
    generateCompletion({ prompt: RefinancePrompt, messages: messages });

    setChatText("");
  };

  useEffect(() => {
    /** Initiate Conversation */
    generateCompletion({
      prompt: RefinancePrompt,
      messages: [],
    });
  }, []);

  useEffect(() => {
    setDataSources(chatHistory);
  }, [history]);

  return (
    <>
      <main className="bg-white bg-gradient-to-l from-emerald-50 via-teal-50 to-slate-30 p-5">
        {/* Logo */}
        <p className="py-5">
          <Image
            src="/assets/homeowner-logo.svg"
            alt="Leadify"
            className="mx-auto text-center"
            width={150}
            height={50}
          />
        </p>

        {/* Main Head */}
        <h2 className="text-center font-light text-[30px] sm:text-[46px] md:text-[80px] leading-[120%] my-10 tracking-tighter">
          Let Our AI Find You a <br />
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5DD18C] to-[#72B497]">
            {" "}
            Cheaper Mortgage
          </span>
        </h2>

        <p className="text-center text-[16px] sm:text-[20px] text-[#667085]  my-10">
          To start, describe why you want to refinance your mortgage repayments{" "}
        </p>

        {/* Chat Wrap */}
        <div className="mx-auto max-w-[890px] rounded-[8px] border border-[#8F9195]">
          {/* ChatBox */}
          <MessageList
            className="message-list bg-[#FAFAFA] p-5 rounded-[8px]"
            lockable={true}
            toBottomHeight={"100%"}
            dataSource={dataSources || []}
          />

          {/* MessageBox */}
          <div className="flex py-2 px-5 space-x-4 bg-white rounded-[8px]">
            <input
              type="text"
              className="w-full border-none p-2.5 active:border-none focus-visible:border-none focus:border-none text-[#737376] text-[16px]"
              value={chatText}
              onChange={(event) => {
                setChatText(event.target.value);
              }}
              onKeyDown={handleEnterKey}
              placeholder="Type a reply..."
            />
            <button
              type="button"
              className="bg-transparent"
              onClick={handleBtnClick}
            >
              <Image
                src="/assets/btn-submit.svg"
                alt="Leadify"
                className="mx-auto text-center"
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
