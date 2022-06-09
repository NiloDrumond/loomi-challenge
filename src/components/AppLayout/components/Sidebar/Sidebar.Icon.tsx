import { Icon } from '@chakra-ui/react';
import React from 'react';

// You can't create variants for the component Icon, so this is the easiest way to creat one
const SidebarIcon = (props: React.ComponentPropsWithRef<typeof Icon>) => {
  return <Icon w={6} h={6} opacity={0.6} {...props} />;
};

export default SidebarIcon;
