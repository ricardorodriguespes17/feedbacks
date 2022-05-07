import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { useState } from "react"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep"

export const feedbackTypes = {
  BUG: {
    label: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Image de um inseto",
    },
  },
  IDEA: {
    label: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Image de uma lâmpada",
    },
  },
  OTHER: {
    label: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Image de um balão",
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer>
        Feito com ♥︎ por{" "}
        <a className="underline underline-offset-2" href="">
          Ricardo
        </a>
      </footer>
    </div>
  )
}
