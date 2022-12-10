import React from 'react'
import { useTheme } from '../../themeContext'

export const PiercedTongue = () => {
  const { colors } = useTheme()

  return (
    <>
      <path d="M443.14,621.86c0-18.9,113.72-16.06,113.72,0a56.86,56.86,0,0,1-113.72,0Z" fill={colors.outline} />
      <path
        d="M443.14,621.86c0-18.9,113.72-16.06,113.72,0a56.86,56.86,0,0,1-113.72,0Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit="10"
        strokeWidth="6px"
      />
      <circle cx="500.5" cy="721.5" r="6.5" fill="#FFC227" stroke={colors.outline} strokeWidth="3" />
      <path
        d="M532.49,646.6c0-8.06-14.55-14.6-32.49-14.6s-32.49,6.54-32.49,14.6h0v44.34c0,14.41,14.55,26.08,32.49,26.08s32.49-11.67,32.49-26.08V646.61Z"
        fill={colors.tongue}
      />
      <path
        d="M532.49,646.6c0-8.06-14.55-14.6-32.49-14.6s-32.49,6.54-32.49,14.6h0v44.34c0,14.41,14.55,26.08,32.49,26.08s32.49-11.67,32.49-26.08V646.61Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit="10"
        strokeWidth="8px"
      />
      <path
        d="M479.31,626.6l.91-.21.76-.14c.49-.08,1-.14,1.46-.18a21.42,21.42,0,0,1,2.89-.1,25,25,0,0,1,5.79.81,21.39,21.39,0,0,1,10.34,6.11A20.07,20.07,0,0,1,506.54,643a17.19,17.19,0,0,1-1.37,10.35c-2.08-2.93-3.66-5.55-5.32-7.76a27.26,27.26,0,0,0-2.46-3,14.09,14.09,0,0,0-2.69-2.16,15.31,15.31,0,0,0-6.11-2.08,25.67,25.67,0,0,0-3.43-.22c-.59,0-1.18,0-1.76,0l-.85.06-.4,0c-.09,0-.29,0-.22,0Z"
        fill={colors.outline}
      />
      <rect x="498" y="685" width="5" height="19" rx="2.5" fill="#FFC227" stroke={colors.outline} strokeWidth="2" />
      <circle cx="500.5" cy="684.5" r="8.5" fill="#FFC227" stroke={colors.outline} strokeWidth="3" />
    </>
  )
}
