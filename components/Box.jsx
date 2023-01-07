import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export function Box() {
  const [TextTranslated, setTextTranslated] = useState("");
  const [Text, setText] = useState("");
  const [Language, setLanguage] = useState("en");

  const translate = () => {
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        "to[0]": Language,
        "api-version": "3.0",
        profanityAction: "NoAction",
        textType: "plain",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "d0bbda32demsh196c210339bebb1p163372jsn4be713e62816",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      data: `[{"Text": "${Text}" }]`,
    };

    axios
      .request(options)
      .then(function (response) {
        const translated = response.data[0].translations[0].text;
        setTextTranslated(translated);
      })
      .catch(function (error) {
        console.error(error);
      });

    if (!Text) {
      toast.error("Enter some text!", {
        style: {
          background: "#1E1E1E",
          color: "#f7f7f7",
          border: "2px solid #E46700",
        },
        iconTheme: {
          primary: "#8B3F00",
          secondary: "#ffffff",
        },
      });
      return;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Toaster position="bottom-right" />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-12 mb-4 sm:mb-8">
        <div className="mt-5 sm:mt-11">
          <textarea
            id="textarea"
            cols="40"
            rows="10"
            placeholder="Enter a text"
            onChange={({ target }) => setText(target.value)}
            className="resize-none bg-home border-2 border-primary rounded outline-none text-white p-3"
          ></textarea>
        </div>

        <div className="flex justify-center flex-col">
          <div className="flex gap-2">
            <span className="text-sm text-second font-bold">To:</span>
            <select
              className="text-black bg-primary rounded outline-none"
              value={Language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="en">Inglês</option>
              <option value="es">Espanhol</option>
              <option value="pt">Português</option>
              <option value="fr">Francês</option>
              <option value="de">Alemão</option>
              <option value="it">Italiano</option>
              <option value="sv">Sueco</option>
              <option value="ar">Árabe</option>
            </select>
          </div>

          <div className="mt-6">
            <textarea
              id="textarea"
              readOnly={true}
              cols="40"
              rows="10"
              placeholder="Select a language"
              value={TextTranslated}
              className="resize-none bg-home border-2 border-primary rounded outline-none text-white p-3"
            ></textarea>
          </div>
        </div>
      </div>
      <motion.div
        whileHover={{ opacity: 1, scale: 1.2 }}
        whileTap={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={translate}
        className="text-black font-medium bg-primary rounded outline-none p-1 cursor-pointer"
      >
        Translate
      </motion.div>
    </div>
  );
}
