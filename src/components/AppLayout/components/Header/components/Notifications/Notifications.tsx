import React from 'react';
import {
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  Box,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  VStack,
  HStack,
  Spacer,
  Text,
  Divider,
} from '@chakra-ui/react';
import { FiBell } from 'react-icons/fi';
import { BsCheckAll } from 'react-icons/bs';
import { ClosePopoverButton } from 'components/ClosePopoverButton';
import { NotificationsItem } from './Notifications.Item';

const Notifications = () => {
  return (
    <Popover placement="bottom-end" offset={[60, 30]} arrowSize={16}>
      <PopoverTrigger>
        <IconButton
          icon={<Icon w={5} h={5} as={FiBell} />}
          aria-label="ver notificações"
        />
      </PopoverTrigger>
      <PopoverContent
        borderColor="main.400"
        borderWidth="1px"
        borderRadius="xl"
        p={4}
        bg="main.300"
        color="brand.light"
        width="container.sm"
        maxHeight="calc(100vh - var(--chakra-space-24))"
        overflow="hidden"
      >
        <PopoverArrow
          transform="scale(0.6, 1) rotate(45deg) !important"
          bg="main.300"
        />
        <PopoverHeader h={12} borderBottom="none" position="relative">
          <Box
            _before={{
              content: '""',
              borderBottomWidth: '1px',
              borderColor: 'white',
              w: '60px',
              h: '110%',
              position: 'absolute',
            }}
            position="relative"
            fontWeight={600}
            fontSize="xl"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            Notificações
            <Box ml={2} w={2} h={2} borderRadius="50%" bg="orange.400" />
          </Box>
          <ClosePopoverButton />
        </PopoverHeader>
        <PopoverBody
          maxH="calc(100vh - var(--chakra-space-12))"
          h="calc(100vh - var(--chakra-space-12))"
          overflow="hidden"
          p={0}
        >
          <VStack w="100%" h="100%" maxH="100%" overflow="hidden">
            <HStack w="100%">
              <Spacer />
              <IconButton
                size="md"
                variant="solid"
                bg="orange.400"
                color="white"
                borderRadius="50%"
                aria-label="marcar todas as notificações como lidas"
                icon={<Icon w={6} h={6} as={BsCheckAll} />}
              />
            </HStack>
            <VStack
              overflowY="scroll"
              alignItems="flex-start"
              py={4}
              px={6}
              w="100%"
            >
              <Text color="gray.400" pl={4}>
                Hoje
              </Text>
              <NotificationsItem unseen />
              <Divider borderColor="gray.500" />
              <NotificationsItem unseen />
              <Divider borderColor="gray.500" />
              <Text color="gray.400" pl={4}>
                Ontem
              </Text>
              <NotificationsItem />
              <Divider borderColor="gray.500" />
              <NotificationsItem />
              <Divider borderColor="gray.500" />
              <Text color="gray.400" pl={4}>
                Esta semana
              </Text>
              <NotificationsItem />
              <Divider borderColor="gray.500" />
              <Text color="gray.400" pl={4}>
                Mês passado
              </Text>
            </VStack>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export { Notifications };
