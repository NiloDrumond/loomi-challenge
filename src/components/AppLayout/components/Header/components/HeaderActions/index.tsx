import React from 'react';
import {
  Icon,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Button,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { FiLogOut, FiUser } from 'react-icons/fi';
import UserProfile from 'components/UserProfile';
import { hoverOnBlack } from 'styles/utils/hoverOnBlack';

const HeaderActions: React.FC = () => {
  return (
    <Popover placement="bottom-end" offset={[10, 30]}>
      <PopoverTrigger>
        <IconButton
          icon={<UserProfile name="Eduardo" avatarOnly />}
          aria-label=""
        />
      </PopoverTrigger>
      <PopoverContent
        borderColor="main.400"
        borderWidth="1px"
        borderRadius="xl"
        bg="main.300"
        color="brand.light"
        w="30"
      >
        <PopoverBody>
          <VStack>
            <Button
              leftIcon={<Icon as={FiUser} />}
              w="100%"
              justifyContent="flex-start"
              {...hoverOnBlack()}
            >
              Editar perfil
            </Button>
            <Divider />
            <Button
              leftIcon={<Icon as={FiLogOut} />}
              w="100%"
              justifyContent="flex-start"
              {...hoverOnBlack()}
            >
              Sair
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default HeaderActions;
