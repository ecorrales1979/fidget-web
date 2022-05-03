import { useState } from "react";
import { FeedbackKey, feedbackTypes } from "../../data/feedbacktypes";

import { CloseButton } from "../CloseButton";
import { FeedbackButton } from "../FeedbackButton";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackKey | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleFeedbackRestart() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestart={handleFeedbackRestart} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackSelection={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestart={handleFeedbackRestart}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Made with ♥ by <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  )
}