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
} from '@chakra-ui/react';
import { FiBell } from 'react-icons/fi';
import ClosePopoverButton from 'components/ClosePopoverButton';

const HeaderNotifications: React.FC = () => {
  return (
    <Popover placement="bottom-end" offset={[60, 30]} arrowSize={16}>
      <PopoverTrigger>
        <IconButton icon={<Icon w={5} h={5} as={FiBell} />} aria-label="" />
      </PopoverTrigger>
      <PopoverContent
        borderColor="main.400"
        borderWidth="1px"
        borderRadius="xl"
        p={4}
        bg="main.300"
        color="brand.100"
      >
        <PopoverArrow
          transform="scale(0.6, 1) rotate(45deg) !important"
          bg="main.300"
        />
        <PopoverHeader borderBottom="none" position="relative">
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
            fontSize="lg"
          >
            Notificacoes
          </Box>
          <ClosePopoverButton />
        </PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default HeaderNotifications;
