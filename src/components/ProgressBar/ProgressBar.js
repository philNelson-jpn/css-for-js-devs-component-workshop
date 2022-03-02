/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
  },
  medium: {
    height: 12,
    padding: 0,
  },
  large: {
    height: 16,
    padding: 4,
  },

}

const ProgressBar = ({ value, size }) => {

  const styles = STYLES[size];

  if(!styles){
    throw new Error(`Unknown height passed to ProgressBar: ${size}`)
  }

  return <Wrapper 
    role="progressbar" 
    aria-valuenow={value} 
    aria-valuemin="0" 
    aria-valuemax="100"
    style={{'--padding': styles.padding + 'px'}}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      

  <BarWrapper>
    <Bar style={{'--width': value + '%', '--height': styles.height + 'px'}}/>
  </BarWrapper>
  </Wrapper>
  ;
};

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: 4px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
border-radius: 4px;
// Ensure that the progress bar fills its container fluidly, border radius and all
overflow: hidden;
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background: slateblue;
  border-radius: 4px 0 0 4px;
`;



export default ProgressBar;
