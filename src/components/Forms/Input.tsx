import React from 'react'

interface Props {
    label: string;
    type: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Input: React.FC<Props> = ({ label, type, placeholder, onChange, value }) => {
    return (
        <label className='block w-full'>
            <span>{label}</span>
            <input
                type={type}
                autoComplete='off'
                className="mt-4 text-sm bg-neutral-50/30 text-stone-800 placeholder-stone-400 block
w-full rounded-md border-stone-200 shadow-sm
focus:border-yellow-400  focus:outline-none focus:ring-1 focus:ring-yellow-400
"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </label>
    )
}

export default Input
