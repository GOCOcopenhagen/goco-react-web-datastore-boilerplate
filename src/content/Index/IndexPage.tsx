import * as React from 'react'
import styled from 'styled-components'

import { Counter } from '../../components/organisms/Counter'

interface Props {

}

const Container = styled.div`
    background: lightblue;
`

export const IndexPage: React.FC<Props> = () => {
    
    return (
        <Container>
            <Counter />
        </Container>
    )
}
