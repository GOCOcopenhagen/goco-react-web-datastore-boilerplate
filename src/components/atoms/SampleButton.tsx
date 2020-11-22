import styled from 'styled-components'

import { lightered } from '../../globals/colors'

export const SampleButton = styled.button<{margin?: boolean}>`
    padding: 10px 20px;
    background: ${lightered};
    margin: ${(props) => (props.margin ? '30px' : '0px')}
`
