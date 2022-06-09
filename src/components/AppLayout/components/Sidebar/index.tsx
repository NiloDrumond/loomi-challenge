import React from 'react';
import { Divider, Icon, IconButton, VStack } from '@chakra-ui/react';
import {
  FiAlignLeft,
  FiCalendar,
  FiHexagon,
  FiHome,
  FiLayers,
  FiMessageSquare,
  FiShoppingCart,
  FiTool,
  FiTruck,
  FiUser,
} from 'react-icons/fi';
import SidebarIcon from './Sidebar.Icon';

const Sidebar: React.FC = () => {
  return (
    <VStack
      bg="white"
      w="20"
      height="100%"
      boxShadow="0px 3px 6px #00000029"
      borderRadius="sm"
      pt={4}
      spacing={4}
    >
      <IconButton
        icon={<SidebarIcon as={FiAlignLeft} />}
        aria-label="Expandir navegacao"
      />
      <Divider />
      <IconButton icon={<SidebarIcon as={FiHome} />} aria-label="Dashboard" />
      <IconButton icon={<SidebarIcon as={FiLayers} />} aria-label="Catalogo" />
      <IconButton icon={<SidebarIcon as={FiTool} />} aria-label="Catalogo" />
      <IconButton icon={<SidebarIcon as={FiTruck} />} aria-label="Catalogo" />
      <IconButton
        icon={<SidebarIcon as={FiShoppingCart} />}
        aria-label="Catalogo"
      />
      <IconButton
        icon={<SidebarIcon as={FiCalendar} />}
        aria-label="Catalogo"
      />
      <IconButton
        icon={<SidebarIcon as={FiMessageSquare} />}
        aria-label="Catalogo"
      />
      <IconButton icon={<SidebarIcon as={FiUser} />} aria-label="Catalogo" />
      <IconButton icon={<SidebarIcon as={FiHexagon} />} aria-label="Catalogo" />
    </VStack>
  );
};

export default Sidebar;
