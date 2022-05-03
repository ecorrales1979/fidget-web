import { CloseButton } from "./CloseButton";

import bugImage from '../assets/bug.svg';
import ideaImage from '../assets/idea.svg';
import thoughtImage from '../assets/thought.svg';

interface FeedbackType {
  title: string;
  image: {
    source: string;
    alt: string;
  }
}

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
          <button
            key={key}
            type="button"
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>

      <footer className="text-xs text-neutral-400">
        Made with ♥ by <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  )
}