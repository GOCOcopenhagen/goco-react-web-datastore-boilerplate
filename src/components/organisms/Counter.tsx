import * as React from 'react'
import {useAppContext} from '../../globals/loadingContext'

import { DataStore } from "@aws-amplify/datastore";
import { Click } from "../../models";

import { SampleButton } from '../atoms/SampleButton'
import { DisplayClick } from '../molecules/DisplayClick'

interface Props {
}

export const Counter: React.FC<Props> = () => {
    const [clicks, setClicks] = React.useState<Click[]>([])
    const setLoading = useAppContext()

    const query = async () => {
        setLoading(true)
        setClicks(await DataStore.query(Click))
        setLoading(false)
    }

    React.useEffect(() => { query() }, [])
    DataStore.observe(Click).subscribe(query)


    const handleClick = async () => {
        setLoading(true)
        await DataStore.save(
            new Click({
                time: Date.now()
            })
        );
        setLoading(false)
    }

    return (
        <>
            {clicks && clicks.map(({ time }, key) => <DisplayClick key={key} clickTime={time} />)}
            <SampleButton onClick={handleClick} type="button" margin>Click me to increment</SampleButton>
        </>
    )
}
