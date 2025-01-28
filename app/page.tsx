'use client'
import Image from "next/image";
import { useState } from "react";
import { sendDiscordMessage } from "./discord";




export default function Home() {

  const [code, setCode] = useState("none");

  let generateCode = async (length: number, type: string) => {
    // generate random characters
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    if (type == "600ml") {
      result += "600ML-";
    } else {
      result += "1000ML-";
    }
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCode(result);
    await sendDiscordMessage(result);
  }

  return (
    <div className="flex-row items-center min-h-screen p-20 space-y-4">
      <div>
        <h1 className="font-geistMono text-4xl">ipst otp</h1>
        <h1 className="font-geistMono text-xl">otp for something</h1>
      </div>
      <div>
        <div className="w-max font-geistMono transition-colors duration-500 text-white  hover:text-blue-700 hover:underline underline-offset-4" onClick={() => generateCode(10, "600ml")}>
          generate 600ml
        </div>
        <div className="w-max font-geistMono transition-colors duration-500 text-white  hover:text-blue-700 hover:underline underline-offset-4" onClick={() => generateCode(10, "1000ml")}>
          generate 1000ml
        </div>
      </div>
      <h1 className="text-6xl font-geistMono">
        otp: {code}
      </h1>
    </div>
  );
}
