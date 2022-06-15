import React from 'react';
import { Box, useDisclosure, useOutsideClick, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FiAlignLeft,
  FiArrowLeft,
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
  const { isOpen, onClose, onToggle } = useDisclosure();
  const containerRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick({ handler: onClose, ref: containerRef });

  return (
    <Box w="20" h="100%" pt={4} position="relative">
      <VStack
        as={motion.div}
        animate={{ width: isOpen ? '300%' : '100%' }}
        // https://chakra-ui.com/guides/integrations/with-framer:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.5,
        }}
        ref={containerRef}
        bg="white"
        boxShadow="md"
        borderRadius="lg"
        h="92%"
        spacing={4}
        pt={4}
        px={5}
        mt={8}
        position="absolute"
        alignItems="flex-start"
        left={0}
        top={0}
        overflow="hidden"
        zIndex={10}
      >
        <SidebarItem
          label="Fechar"
          customTooltip="Expandir"
          icon={isOpen ? FiArrowLeft : FiAlignLeft}
          onClick={onToggle}
          isExpanded={isOpen}
        />
        <Box
          h={1}
          w="calc(100% + var(--chakra-space-10))"
          borderBottomWidth="1px"
          borderColor="gray.200"
          mx="-1.25rem !important"
        />
        <SidebarItem
          linkTo="/app"
          label="Início"
          icon={FiHome}
          isExpanded={isOpen}
        />
        <SidebarItem
          linkTo="/app/catalog"
          label="Catálogo"
          icon={FiLayers}
          isExpanded={isOpen}
        />
        <SidebarItem label="Servicos" icon={FiTool} isExpanded={isOpen} />
        <SidebarItem
          linkTo="/app/logistics"
          label="Logística"
          icon={FiTruck}
          isExpanded={isOpen}
        />
        <SidebarItem
          label="Pedidos"
          icon={FiShoppingCart}
          isExpanded={isOpen}
        />
        <SidebarItem
          label="Pagamentos"
          icon={FiCreditCard}
          isExpanded={isOpen}
        />
        <SidebarItem
          label="Comunicação"
          icon={FiMessageSquare}
          isExpanded={isOpen}
        />
        <SidebarItem label="Clientes" icon={FiUser} isExpanded={isOpen} />
        <SidebarItem
          label="Configurações"
          icon={FiHexagon}
          isExpanded={isOpen}
        />
      </VStack>
    </Box>
  );
};

export default Sidebar;
