import React from 'react';
import { Center, Flex, HStack, Spacer, Spinner, Text } from '@chakra-ui/react';
import Card from 'components/Card';
import { DashboardCardProps } from './DashboardCard.types';
import { getColors } from './DashboardCard.utils';

const DashboardCard = ({
  header,
  description,
  extraInfo,
  footer,
  colorScheme,
  isLoading,
}: DashboardCardProps) => {
  const colors = React.useMemo(() => {
    return getColors(colorScheme);
  }, [colorScheme]);

  return (
    <Card minH="44" spacing={2} w="100%" h="100%">
      {header && <Text fontWeight={700}>{header}</Text>}
      {isLoading ? (
        <Center w="100%" h="100%">
          <Spinner size="lg" color="brand.main" />
        </Center>
      ) : (
        <>
          {extraInfo && (
            <Flex
              mt="0.25rem !important"
              p={2}
              bg="white"
              boxShadow="float"
              borderRadius="3xl"
            >
              <Text fontSize="xs" fontWeight={700} color={colors.description}>
                {extraInfo}
              </Text>
            </Flex>
          )}
          {description ? (
            <Text fontSize="sm" color={colors.description}>
              {description}
            </Text>
          ) : (
            <Spacer />
          )}
          {footer && (
            <HStack alignItems="center">
              {footer.prefix && <Text>{footer.prefix}</Text>}
              <Text fontSize="xl" fontWeight={700}>
                {footer.main}
              </Text>
              {footer.suffix && <Text>{footer.suffix}</Text>}
            </HStack>
          )}
        </>
      )}
    </Card>
  );
};

export default DashboardCard;
