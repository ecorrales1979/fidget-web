export interface FeedbackType {
  title: string;
  image: {
    source: string;
    alt: string;
  }
}

export function FeedbackButton({ type }: { type: FeedbackType }) {
  return (
    <button
      type="button"
      className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
    >
      <img src={type.image.source} alt={type.image.alt} />
      <span>{type.title}</span>
    </button>
  )
}