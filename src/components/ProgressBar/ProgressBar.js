/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Wrapper 
    role="progressbar" 
    aria-valuenow={value} 
    aria-valuemin="0" 
    aria-valuemax="100">
      <VisuallyHidden>{value}%</VisuallyHidden>

  <Bar style={{'--width': value + '%'}}/>
  </Wrapper>
  ;
};

const Wrapper = styled.div`
  height: 12px;
  width: 100%;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  height: 12px;
  width: var(--width);
  background: slateblue;
`;



export default ProgressBar;
