import React from 'react';
import { Text, HStack, Center } from '@chakra-ui/react';
import { UserProfileProps } from './UserProfile.types';

const UserProfile: React.FC<UserProfileProps> = ({ name, avatarOnly }) => {
  if (name.length === 0) return <></>;

  return (
    <HStack>
      {!avatarOnly && <Text>{name}</Text>}
      <Center w="10" h="10" borderRadius="50%" bg="purple.500" color="white">
        {name[0]}
      </Center>
    </HStack>
  );
};

export default UserProfile;
