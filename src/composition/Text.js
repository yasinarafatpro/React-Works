import React from 'react'

export const Text = ({addEmoji}) => {
    let text='I am yasin'
  return (
    <div>{addEmoji ? addEmoji(text,'*'):text}</div>
  )
}
