import { Icon, IconButton, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarItemProps } from './Sidebar.types';

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  linkTo,
  onClick,
}) => {
  return (
    <Tooltip
      hasArrow
      label={label}
      placement="right"
      bg="main.200"
      color="main.300"
      offset={[0, 30]}
    >
      {linkTo ? (
        <Link to={linkTo}>
          <IconButton
            onClick={onClick}
            icon={<Icon w={5} h={5} opacity={0.6} as={icon} />}
            aria-label={label}
          />
        </Link>
      ) : (
        <IconButton
          onClick={onClick}
          icon={<Icon w={5} h={5} opacity={0.6} as={icon} />}
          aria-label={label}
        />
      )}
    </Tooltip>
  );
};

export default SidebarItem;
