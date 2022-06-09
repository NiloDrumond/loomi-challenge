import React from 'react';
import { Divider, Icon, IconButton, VStack } from '@chakra-ui/react';
import {
  FiAlignLeft,
  FiCreditCard,
  FiHexagon,
  FiHome,
  FiLayers,
  FiMessageSquare,
  FiShoppingCart,
  FiTool,
  FiTruck,
  FiUser,
} from 'react-icons/fi';
import SidebarItem from './Sidebar.Item';

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
      <SidebarItem label="Expandir" icon={FiAlignLeft} />
      <Divider />
      <SidebarItem linkTo="/app" label="Inicio" icon={FiHome} />
      <SidebarItem linkTo="/app/catalog" label="Catalogo" icon={FiLayers} />
      <SidebarItem linkTo="/app" label="Servicos" icon={FiTool} />
      <SidebarItem linkTo="/app/logistics" label="Logistica" icon={FiTruck} />
      <SidebarItem linkTo="/app" label="Pedidos" icon={FiShoppingCart} />
      <SidebarItem linkTo="/app" label="Pagamentos" icon={FiCreditCard} />
      <SidebarItem linkTo="/app" label="Comunicacao" icon={FiMessageSquare} />
      <SidebarItem linkTo="/app" label="Clientes" icon={FiUser} />
      <SidebarItem linkTo="/app" label="Configuracoes" icon={FiHexagon} />
    </VStack>
  );
};

export default Sidebar;
