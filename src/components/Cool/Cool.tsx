import { useRef, type CSSProperties, type PointerEventHandler } from 'react'

type CSSVarName =
  | '--card-rotate-x'
  | '--card-rotate-y'
  | '--pointer-x'
  | '--pointer-y'
  | '--background-x'
  | '--background-y'
  | '--sparkle-opacity'
  | '--glare-opacity'

const CARD_IMAGE = '/N_Zekrom.jpg'
const HXH_IMAGE = '/hxh.jpg'
const BLUE_BOX_IMAGE = '/bluebox.jpg'

const INITIAL_CARD_VARS: Record<CSSVarName, string> = {
  '--card-rotate-x': '0deg',
  '--card-rotate-y': '0deg',
  '--pointer-x': '50%',
  '--pointer-y': '50%',
  '--background-x': '50%',
  '--background-y': '50%',
  '--sparkle-opacity': '0.35',
  '--glare-opacity': '0.24',
}

const IDLE_CARD_VARS: Partial<Record<CSSVarName, string>> = {
  '--card-rotate-x': '0deg',
  '--card-rotate-y': '0deg',
  '--sparkle-opacity': '0.12',
  '--glare-opacity': '0.02',
}

function setCardVars(
  element: HTMLDivElement,
  vars: Partial<Record<CSSVarName, string>>
) {
  Object.entries(vars).forEach(([name, value]) => {
    if (value) {
      element.style.setProperty(name, value)
    }
  })
}

export default function Cool() {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)

  const animateCard = (clientX: number, clientY: number) => {
    const card = cardRef.current

    if (!card) {
      return
    }

    const bounds = card.getBoundingClientRect()
    const px = (clientX - bounds.left) / bounds.width
    const py = (clientY - bounds.top) / bounds.height
    const clampX = Math.min(Math.max(px, 0), 1)
    const clampY = Math.min(Math.max(py, 0), 1)

    const rotateY = (clampX - 0.5) * 40
    const rotateX = (0.5 - clampY) * 50
    const pointerX = `${(clampX * 100).toFixed(2)}%`
    const pointerY = `${(clampY * 100).toFixed(2)}%`
    const backgroundX = `${(35 + clampX * 30).toFixed(2)}%`
    const backgroundY = `${(35 + clampY * 30).toFixed(2)}%`
    const distanceFromCenter = Math.hypot(clampX - 0.5, clampY - 0.5)
    const sparkleOpacity = Math.max(0.16, 0.38 - distanceFromCenter * 0.36)
    const glareOpacity = Math.max(0.04, 0.12 - distanceFromCenter * 0.1)

    setCardVars(card, {
      '--card-rotate-x': `${rotateX.toFixed(2)}deg`,
      '--card-rotate-y': `${rotateY.toFixed(2)}deg`,
      '--pointer-x': pointerX,
      '--pointer-y': pointerY,
      '--background-x': backgroundX,
      '--background-y': backgroundY,
      '--sparkle-opacity': sparkleOpacity.toFixed(2),
      '--glare-opacity': glareOpacity.toFixed(2),
    })
  }

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
    }

    frameRef.current = requestAnimationFrame(() => {
      animateCard(event.clientX, event.clientY)
    })
  }

  const resetCard = () => {
    const card = cardRef.current

    if (!card) {
      return
    }

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }

    setCardVars(card, IDLE_CARD_VARS)
  }

  return (
    <section
      id="cool"
      className="mx-auto flex w-full max-w-[1200px] flex-col items-start px-6 pb-18 pt-2 md:px-16 md:pb-24"
    >
      <div className="grid w-full gap-6 md:grid-cols-3 md:gap-7">
        <div className="w-full max-w-[300px]">
          <div className="w-full text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-subtitle/58">
              #backofmyphonecase
            </p>
          </div>

          <div className="mt-2 flex w-full justify-start [perspective:1800px]">
            <div
              ref={cardRef}
              className="pokemon-card"
              onPointerMove={handlePointerMove}
              onPointerLeave={resetCard}
              onPointerCancel={resetCard}
              style={INITIAL_CARD_VARS as CSSProperties}
            >
              <div className="pokemon-card__shine" aria-hidden="true" />
              <div className="pokemon-card__holo" aria-hidden="true" />
              <img
                src={CARD_IMAGE}
                alt="N's Zekrom Pokemon card"
                className="pokemon-card__image"
                draggable="false"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[300px]">
          <div className="cool-tag">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-subtitle/58">
              #favanime
            </p>
          </div>
          <div className="cool-panel mt-2">
            <img
              src={HXH_IMAGE}
              alt="Hunter x Hunter"
              className="cool-panel__image"
              draggable="false"
            />
            <div className="cool-panel__overlay" aria-hidden="true" />
          </div>
        </div>

        <div className="w-full max-w-[300px]">
          <div className="cool-tag">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-subtitle/58">
              #favmanga
            </p>
          </div>
          <div className="cool-panel mt-2">
            <img
              src={BLUE_BOX_IMAGE}
              alt="Blue Box"
              className="cool-panel__image"
              draggable="false"
            />
            <div className="cool-panel__overlay" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
