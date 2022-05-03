import { CloseButton } from "../../CloseButton";
import successImage from '../../../assets/success.svg';

interface Props {
  onFeedbackRestart: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestart }: Props) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Success</span>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImage} alt="Success Image" />
        <span className="mt-2 text-xl">We appreciate your feedback!</span>
        <button
          type="button"
          onClick={onFeedbackRestart}
          className=" mt-4 py-2 px-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Send another feedback
        </button>
      </div>
    </>
  )
}
