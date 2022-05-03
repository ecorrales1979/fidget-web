import { CloseButton } from "../../CloseButton";
import successImage from '../../../assets/success.svg';

export function FeedbackSuccessStep() {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Success</span>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImage} alt="Success Image" />
        <span className="mt-2 text-xl">We appreciate your feedback!</span>
      </div>
    </>
  )
}
