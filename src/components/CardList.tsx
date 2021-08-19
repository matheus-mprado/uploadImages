import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [urlImage, setUrlImage] = useState('');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleViewImage(url: string) {
    setUrlImage(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        {cards.map(data => {
          return (
            <Card
              key={data.id}
              viewImage={() => handleViewImage(data.url)}
              data={data}
            />
          );
        })}
      </SimpleGrid>

      {urlImage && (
        <ModalViewImage isOpen={isOpen} imgUrl={urlImage} onClose={onClose} />
      )}
    </>
  );
}
