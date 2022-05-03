import { FeedbackKey, feedbackTypes } from "../../../data/feedbacktypes";
import { CloseButton } from "../../CloseButton";

interface Props {
  feedbackType: FeedbackKey;
}

export function FeedbackContentStep({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
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
      <div className="flex py-8 gap-2 w-full"></div>
    </>
  )
}
