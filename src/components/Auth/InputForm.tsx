import React from 'react'

interface Props {
    label: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}

const InputForm: React.FC<Props> = ({ label, type, placeholder, value, onChange, error }) => {
    return (
        <label className='block'>
            <span className={`${error ? 'text-red-500' : 'text-stone-500'} capitalize`}>{label}</span>
            <input
                type={type}
                className={`mt-1 text-sm bg-neutral-50/30 text-stone-500 placeholder-stone-400 block
                w-full rounded-md ${error ? 'border-red-500' : 'border-stone-200'} shadow-sm
                focus:border-yellow-400  focus:outline-none focus:ring-1 focus:ring-yellow-400
                `}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </label>
    )
}

export default InputForm
