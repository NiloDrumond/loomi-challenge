import React from 'react';
import {
  FormControl,
  Text,
  HStack,
  FormErrorMessage,
  VStack,
  Box,
} from '@chakra-ui/react';
import { FormInputWrapperProps } from './FormInputWrapper.types';

const FormInputWrapper: React.FC<FormInputWrapperProps> = ({
  label,
  controlProps,
  topAlign,
  children,
}) => {
  return (
    <FormControl {...controlProps}>
      <HStack alignItems={topAlign ? 'flex-start' : 'center'}>
        <Box w="28">
          <Text color="main.300" mr={1}>
            {label}:
          </Text>
        </Box>
        <VStack flex={1} alignItems="flex-start">
          {children}
          <FormErrorMessage>Error muito grande pra caralho!</FormErrorMessage>
        </VStack>
      </HStack>
    </FormControl>
  );
};

export default FormInputWrapper;