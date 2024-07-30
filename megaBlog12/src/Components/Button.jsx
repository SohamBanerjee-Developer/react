import React from 'react'

function Button({
    children,
    bgColor= 'bg-blue-600',
    type = 'button',
    className = '',
    text ='white',
    ...props
}) {
  return (
    <button className={`px-4, py-2, rounded-lg${bgColor},${type},${className},${text}`}  {...props}>
        {children}
    </button>
  )
}

export default Button