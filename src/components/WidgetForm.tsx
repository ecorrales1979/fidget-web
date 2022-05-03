import { CloseButton } from "./CloseButton";

import { FeedbackButton, FeedbackType } from "./FeedbackButton";
import bugImage from '../assets/bug.svg';
import ideaImage from '../assets/idea.svg';
import thoughtImage from '../assets/thought.svg';


const feedbackTypes: Record<string, FeedbackType> = {
  bug: {
    title: 'Problem',
    image: {
      source: bugImage,
      alt: 'Bug image',
    }
  },
  idea: {
    title: 'Idea',
    image: {
      source: ideaImage,
      alt: 'Lamp image',
    }
  },
  other: {
    title: 'Other',
    image: {
      source: thoughtImage,
      alt: 'Cloud image',
    }
  },
}

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Give your feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <FeedbackButton key={key} type={value} />
        ))}
      </div>

      <footer className="text-xs text-neutral-400">
        Made with ♥ by <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  )
}