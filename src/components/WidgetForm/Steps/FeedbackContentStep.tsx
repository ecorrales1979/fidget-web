import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";

import { ScreenshotButton } from "../ScreenshotButton";
import { CloseButton } from "../../CloseButton";
import { Loading } from '../../Loading';
import { FeedbackKey, feedbackTypes } from "../../../data/feedbacktypes";
import { api } from '../../../lib/api';

interface Props {
  feedbackType: FeedbackKey;
  onFeedbackRestart: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestart,
  onFeedbackSent,
}: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setIsSendingFeedback(true);

    api
      .post('feedbacks', {
        comment,
        type: feedbackType,
        screenshot,
      })
      .then(() => onFeedbackSent())
      .catch(error => console.error(error))
      .finally(() => setIsSendingFeedback(false));
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestart}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmit} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Describe your problem here"
          onChange={(ev) => setComment(ev.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            disabled={!comment}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : 'Send feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}
