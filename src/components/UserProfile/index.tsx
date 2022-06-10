import React from 'react';
import { Text, HStack, Center } from '@chakra-ui/react';
import { UserProfileProps } from './UserProfile.types';

const UserProfile: React.FC<UserProfileProps> = ({ name, avatarOnly }) => {
  if (name.length === 0) return <></>;

  return (
    <HStack>
      {!avatarOnly && <Text>{name}</Text>}
      <Center
        w="10"
        h="10"
        borderRadius="50%"
        bg="orange.300"
        fontWeight={500}
        color="main.500300"
        fontSize="xl"
      >
        {name[0]}
      </Center>
    </HStack>
  );
};

export default UserProfile;
