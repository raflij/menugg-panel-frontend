import React from 'react'

interface Props {
    message: string;
    usage?: string;
}

const AlertDashboard: React.FC<Props> = ({ message, usage }) => {
    return (
        <div className="rounded-md border py-2 px-4 border-green-500 bg-green-100 text-green-600 text-sm">
            {message} {usage && <span className='font-medium'>{usage}</span>}
        </div>
    )
}

export default AlertDashboard
