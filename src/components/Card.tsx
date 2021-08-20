import {
  Box,
  Heading,
  Text,
  Image,
  Skeleton,
  SkeletonText,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
}

interface CardProps {
  data: Card;
  viewImage: (url: string) => void;
}

export function Card({ data, viewImage }: CardProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box key={data.ts} borderRadius="md" bgColor="pGray.800">
      <Skeleton isLoaded={!isLoading}>
        <Flex h={['10rem', '17.5rem']} w="100%" borderTopRadius="md">
          <Image
            src={data.url}
            alt={data.title}
            w="100%"
            objectFit="cover"
            objectPosition="top"
            onClick={() => viewImage(data.url)}
            onLoad={() => setIsLoading(false)}
            cursor="pointer"
          />
        </Flex>
      </Skeleton>

      <Box pt={5} pb={4} px={[4, 6]}>
        {isLoading ? (
          <>
            <SkeletonText fontSize={['md', '2xl']} mt={2} noOfLines={1} />
            <SkeletonText fontSize={['sm', 'md']} mt={7} noOfLines={1} />
          </>
        ) : (
          <>
            <Heading fontSize={['md', '2xl']}>{data.title}</Heading>
            <Text mt={2.5} fontSize={['sm', 'md']}>
              {data.description}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
}
