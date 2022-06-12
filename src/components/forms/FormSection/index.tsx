import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { FormSectionProps } from './SectionHeader.types';

const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
  containerProps,
}) => {
  return (
    <VStack alignItems="flex-start" spacing={5} flex={1} {...containerProps}>
      {title && <Text mb={2}>{title}</Text>}
      {children}
    </VStack>
  );
};

export default FormSection;
