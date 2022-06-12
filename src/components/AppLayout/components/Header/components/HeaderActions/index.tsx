import React from 'react';
import {
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Button,
  VStack,
  Divider,
  Spinner,
  Avatar,
} from '@chakra-ui/react';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { hoverOnBlack } from 'styles/utils/hoverOnBlack';
import { useAuth } from 'hooks/auth/useAuth';
import { useUser } from 'hooks/user/useUser';

const HeaderActions: React.FC = () => {
  const { signOut } = useAuth();
  const { userData } = useUser();

  return userData ? (
    <Popover placement="bottom-end" offset={[10, 30]}>
      <PopoverTrigger>
        <Button
          size="lg"
          px={2}
          fontSize="md"
          fontWeight={500}
          rightIcon={<Avatar w={10} h={10} src={userData.avatar} />}
        >
          {userData.name}
        </Button>
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
              onClick={signOut}
            >
              Sair
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ) : (
    <Spinner />
  );
};

export default HeaderActions;
