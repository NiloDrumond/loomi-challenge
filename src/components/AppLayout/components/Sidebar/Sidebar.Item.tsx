import { Button, Icon, Tooltip, Box } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarItemProps } from './Sidebar.types';

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  linkTo,
  onClick,
  isExpanded,
  customTooltip,
}) => {
  const { pathname } = useLocation();

  // ------------
  // This is used to avoid showing the tooltip in an incorrect position when the user closes the sidebar
  const [tooltipDisabled, setTooltipDisabled] = React.useState(true);

  React.useLayoutEffect(() => {
    if (isExpanded) {
      setTooltipDisabled(true);
    } else {
      setTimeout(() => setTooltipDisabled(false), 50);
    }
  }, [isExpanded]);
  // ------------

  const isSelected = React.useMemo(() => {
    return pathname === linkTo;
  }, [pathname, linkTo]);

  return (
    <Tooltip
      hasArrow
      label={customTooltip || label}
      placement="right"
      bg="main.100"
      color="main.300"
      offset={[0, 30]}
      isDisabled={tooltipDisabled}
    >
      {linkTo ? (
        <Box
          position="relative"
          w="100%"
          color={isSelected ? 'white' : 'main.300'}
        >
          <Link to={linkTo} style={{ width: '100%' }}>
            <Button
              onClick={onClick}
              leftIcon={<Icon w={5} h={5} as={icon} />}
              variant="icon-only"
              aria-label={label}
              bg={isSelected ? 'orange.300' : undefined}
              _hover={{
                bg: isSelected ? 'orange.400' : 'gray.100',
              }}
            />
            <Box
              textAlign="left"
              pointerEvents="none"
              position="absolute"
              top={2}
              left={16}
            >
              {label}
            </Box>
          </Link>
        </Box>
      ) : (
        <Box position="relative" w="100%" color="main.300">
          <Button
            onClick={onClick}
            leftIcon={<Icon w={5} h={5} as={icon} />}
            variant="icon-only"
            aria-label={label}
          />
          <Box
            textAlign="left"
            position="absolute"
            pointerEvents="none"
            top={2}
            left={16}
          >
            {label}
          </Box>
        </Box>
      )}
    </Tooltip>
  );
};

export default SidebarItem;
