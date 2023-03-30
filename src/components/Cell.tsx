import {
  Box,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}

const Cell: React.FC<Props> = ({ value, onChange }) => {
  const onChangeHandler: (valueAsString: string) => void = useCallback(
    (ev) => {
      onChange(ev);
    },
    [onChange],
  );

  return (
    <Box>
      <NumberInput
        onChange={(valueString) => onChangeHandler(valueString)}
        value={value}
        max={99999999}
        precision={2} 
        format={(val) => `$ ` + String(val).replace(',', '.')}
      >
        <NumberInputField borderRadius={0} textAlign='left'  fontSize='xs' />
      </NumberInput>
    </Box>
  );
};

export default Cell;
