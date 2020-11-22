import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Dispatch, RootState } from '../../state/store'
import { SampleButton } from '../atoms/SampleButton'
import { DisplayCount } from '../molecules/DisplayCount'

interface Props {
}

export const Counter: React.FC<Props> = () => {

    const dispatch = useDispatch<Dispatch>()
    const testCounter = useSelector((state: RootState) => state.test)
    
    const handleIncrement = () => {
        dispatch.test.increment()
    }

    return (
        <>
            <DisplayCount count={testCounter.count} />
            <SampleButton onClick={handleIncrement} type="button" margin>Click me to increment</SampleButton>
        </>
    )
}
