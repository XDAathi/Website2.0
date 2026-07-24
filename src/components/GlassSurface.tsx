import React from 'react'
import { GlassCard } from 'react-glass-ui'

export interface GlassSurfaceProps {
  children?: React.ReactNode
  width?: number | string
  height?: number | string
  borderRadius?: number
  borderWidth?: number
  brightness?: number
  opacity?: number
  blur?: number
  displace?: number
  backgroundOpacity?: number
  saturation?: number
  distortionScale?: number
  redOffset?: number
  greenOffset?: number
  blueOffset?: number
  xChannel?: 'R' | 'G' | 'B'
  yChannel?: 'R' | 'G' | 'B'
  mixBlendMode?:
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity'
    | 'plus-darker'
    | 'plus-lighter'
  className?: string
  style?: React.CSSProperties
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 30,
  borderWidth = 1,
  brightness = 92,
  opacity = 0.04,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0.08,
  saturation = 1.05,
  distortionScale = 18,
  redOffset = 0,
  greenOffset = 0,
  blueOffset = 0,
  className = '',
  style = {},
}) => {
  const isAutoHeight =
    height === 'auto' || height === 'fit-content' || height === 'max-content'

  const wrapperStyle: React.CSSProperties = {
    ...style,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  }

  const numericWidth = typeof width === 'number' ? width : undefined
  const numericHeight = typeof height === 'number' ? height : undefined
  const resolvedBackgroundOpacity = Math.min(
    0.12,
    Math.max(0.02, backgroundOpacity * 0.45 + opacity * 0.35),
  )

  return (
    <div style={wrapperStyle}>
      <GlassCard
        width={numericWidth}
        height={numericHeight}
        className={`${isAutoHeight ? 'w-full' : 'h-full w-full'} overflow-hidden ${className}`}
        contentClassName={`${isAutoHeight ? 'w-full' : 'h-full w-full'} overflow-hidden`}
        borderRadius={borderRadius}
        borderSize={Math.max(1, borderWidth)}
        borderColor="#ffffff"
        borderOpacity={0.18}
        blur={blur}
        distortion={Math.max(0, distortionScale + displace)}
        flexibility={0}
        chromaticAberration={Math.max(redOffset, greenOffset, blueOffset) * 0.15}
        onHoverScale={1}
        brightness={brightness}
        saturation={Math.max(100, saturation * 100)}
        backgroundColor="#ffffff"
        backgroundOpacity={resolvedBackgroundOpacity}
        innerLightBlur={10}
        innerLightSpread={1}
        innerLightColor="#ffffff"
        innerLightOpacity={0}
        outerLightBlur={10}
        outerLightSpread={1}
        outerLightColor="#ffffff"
        outerLightOpacity={0}
        padding="0"
        color="#ffffff"
      >
        {children}
      </GlassCard>
    </div>
  )
}

export default GlassSurface
