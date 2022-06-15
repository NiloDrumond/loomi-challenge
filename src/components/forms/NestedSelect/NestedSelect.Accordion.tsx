import React from 'react';
import {
  Icon,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Text,
  HStack,
  List,
  ListItem,
  Center,
  Button,
} from '@chakra-ui/react';
import { FiCheck, FiMinus, FiPlus } from 'react-icons/fi';
import { NestedSelectAccordionProps } from './NestedSelect.types';

const NestedSelectAccordion = ({
  items,
  name,
  onChange,
  selected,
}: NestedSelectAccordionProps) => {
  return (
    <AccordionItem border="none">
      {({ isExpanded }) => {
        return (
          <>
            <AccordionButton px={2}>
              <HStack>
                <Center w={6} h={6} bg="orange.300" borderRadius="md">
                  <Icon
                    color="white"
                    w={4}
                    h={4}
                    as={isExpanded ? FiMinus : FiPlus}
                  />
                </Center>
                <Text>{name}</Text>
              </HStack>
            </AccordionButton>
            <AccordionPanel pl={10} pb={4}>
              <List spacing={2}>
                {items.map((i) => {
                  const isSelected = selected.includes(i.value);
                  return (
                    <ListItem key={i.value}>
                      <Button
                        onClick={() => onChange(i.value)}
                        justifyContent="flex-start"
                        w="100%"
                      >
                        <Center
                          mr={2}
                          borderColor="main.400"
                          borderWidth={isSelected ? 0 : 1}
                          w={6}
                          h={6}
                          backgroundColor={isSelected ? 'brand.confirm' : ''}
                          borderRadius="md"
                        >
                          {isSelected && (
                            <Icon color="main.300" w={4} h={4} as={FiCheck} />
                          )}
                        </Center>
                        <Text>{i.label}</Text>
                      </Button>
                    </ListItem>
                  );
                })}
              </List>
            </AccordionPanel>
          </>
        );
      }}
    </AccordionItem>
  );
};

export default NestedSelectAccordion;
