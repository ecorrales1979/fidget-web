import { CloseButton } from "../../CloseButton";
import { FeedbackButton } from "../../FeedbackButton";
import { FeedbackKey, feedbackTypes } from "../../../data/feedbacktypes";

interface Props {
  onFeedbackSelection: (key: FeedbackKey) => void;
}

export function FeedbackTypeStep({ onFeedbackSelection }: Props) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Give your feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <FeedbackButton key={key} type={value} onClick={() => onFeedbackSelection(key as FeedbackKey)} />
        ))}
      </div>
    </>
  )
}
