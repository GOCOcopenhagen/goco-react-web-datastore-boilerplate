import * as React from 'react'

interface Props {
    count: number
}

export const DisplayCount: React.FC<Props> = ({ count }) => {

    return (
        <div>The count is: {count}</div>
    )
}
