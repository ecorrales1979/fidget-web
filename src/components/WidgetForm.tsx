import { useState } from "react";
import { FeedbackKey, feedbackTypes } from "../data/feedbacktypes";

import { CloseButton } from "./CloseButton";
import { FeedbackButton } from "./FeedbackButton";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackKey | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Give your feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => (
            <FeedbackButton key={key} type={value} onClick={() => setFeedbackType(key as FeedbackKey)} />
          ))}
        </div>
      ) : (
        <p>{feedbackType}</p>
      )}

      <footer className="text-xs text-neutral-400">
        Made with ♥ by <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  )
}