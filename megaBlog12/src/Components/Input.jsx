import React from 'react'
//by default React does not let a component access the DOM nodes of other components. Not even for its own children! This is intentional
// Instead, components that want to expose their DOM nodes they can do so
// <MyInput ref={inputRef} /> tells React to put the corresponding DOM node into inputRef.current. However, it’s up to the MyInput component to opt into that—by default, it doesn’t.
// The MyInput component is declared using forwardRef. This opts it into receiving the inputRef from above as the second ref argument which is declared after props.
// MyInput itself passes the ref it received to the <input> inside of it.
import {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input

