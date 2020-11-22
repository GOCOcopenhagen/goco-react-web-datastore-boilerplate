import styled from 'styled-components'

import { lightered } from '../../globals/colors'

export const FixedLoading = styled.div<{}>`
    padding: 10px 20px;
    background: ${lightered};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
`
