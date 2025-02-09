import { useContext } from 'react';
import { AppContext } from '@context';

import Card from './Card';

function CardsList() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('Контекст не найден');
  }

  const { characters } = context;

  return (
    <div className="xs:grid-cols-2 grid gap-6 md:grid-cols-3 sm:md:grid-cols-2 2xl:grid-cols-4">
      {characters.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
}

export default CardsList;
