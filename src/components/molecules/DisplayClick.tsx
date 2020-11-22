import * as React from 'react'

interface Props {
    clickTime: number
}

export const DisplayClick: React.FC<Props> = ({ clickTime }) => {

    return (
        <div>The button was clicked at {(new Date(clickTime).toString())}</div>
    )
}
