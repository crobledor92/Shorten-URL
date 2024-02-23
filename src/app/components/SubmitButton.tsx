'use client'

import { useEffect } from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({text, sendingText}: {text: string, sendingText: string}) => {
    const { pending } = useFormStatus()

    return (
        <button className='w-full md:w-44 rounded md:rounded-none cursor-pointer px-4 h-11 bg-blue-700 font-semibold text-white whitespace-nowrap hover:bg-blue-600' type='submit' disabled={pending}>
            {pending ? sendingText : text}
        </button>
    )
}

export default SubmitButton