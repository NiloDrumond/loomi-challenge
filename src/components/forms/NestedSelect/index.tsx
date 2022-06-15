import React from 'react';
import {
  Button,
  Center,
  Icon,
  Popover,
  PopoverContent,
  Text,
  PopoverTrigger,
  useDisclosure,
  VStack,
  Accordion,
} from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { NestedSelectProps } from './NestedSelect.types';
import NestedSelectAccordion from './NestedSelect.Accordion';
import NestedSelectSelected from './NestedSelect.Selected';

const NestedSelect = ({
  onChange,
  options,
  selected,
  inputLabel,
  selectTitle,
}: NestedSelectProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleChange = React.useCallback(
    (parent: string, child: string) => {
      if (selected) {
        const par = selected[parent];
        if (par) {
          if (par.includes(child)) {
            onChange({
              ...selected,
              [parent]: par.filter(v => v !== child),
            });
          } else {
            onChange({ ...selected, [parent]: [...par, child] });
          }
          return;
        }
      }
      onChange({ ...selected, [parent]: [child] });
    },
    [onChange, selected],
  );

  return (
    <VStack spacing={6} w="100%">
      <Popover matchWidth isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button
            variant="solid"
            color="gray.400"
            width="100%"
            justifyContent="space-between"
            onClick={onToggle}
            alignItems="center"
          >
            {inputLabel}
            <Center
              as={motion.div}
              animate={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              // https://chakra-ui.com/guides/integrations/with-framer:
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                duration: 0.5,
              }}
            >
              <Icon color="main.500" as={FiChevronRight} />
            </Center>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          borderWidth="0"
          borderRadius="2xl"
          w="100%"
          bg="brand.light"
        >
          <VStack w="100%" px={6} py={4} alignItems="flex-start">
            <Text color="main.300" fontSize="lg" fontWeight={700}>
              {selectTitle}
            </Text>
            <Accordion w="100%" borderWidth="0" allowToggle>
              {options.map(({ items, label, value }) => {
                return (
                  <NestedSelectAccordion
                    key={value}
                    name={label}
                    onChange={(child: string) => handleChange(value, child)}
                    items={items}
                    selected={selected ? selected[value] || [] : []}
                  />
                );
              }, [])}
            </Accordion>
          </VStack>
        </PopoverContent>
      </Popover>
      {selected && (
        <NestedSelectSelected options={options} selected={selected} />
      )}
    </VStack>
  );
};

export default NestedSelect;
