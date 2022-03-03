import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomDropdown>{value}
      <Icon id="chevron-down" strokeWidth={1} size={24} />
      </CustomDropdown>
    </SelectWrapper>
  );
};



const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`;

const CustomDropdown = styled.div`
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  border-radius: 8px;
  padding: 12px 16px;
  background: ${COLORS.transparentGray15};
`;

export default Select;
