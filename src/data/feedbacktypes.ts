import { FeedbackType } from "../components/FeedbackButton";
import bugImage from "../assets/bug.svg";
import ideaImage from "../assets/idea.svg";
import thoughtImage from "../assets/thought.svg";

export type FeedbackKey = "bug" | "idea" | "other";

export const feedbackTypes: Record<FeedbackKey, FeedbackType> = {
  bug: {
    title: "Problem",
    image: {
      source: bugImage,
      alt: "Bug image",
    },
  },
  idea: {
    title: "Idea",
    image: {
      source: ideaImage,
      alt: "Lamp image",
    },
  },
  other: {
    title: "Other",
    image: {
      source: thoughtImage,
      alt: "Cloud image",
    },
  },
};
