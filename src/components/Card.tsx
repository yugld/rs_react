import { CharacterType } from '@context/AppProvider';

type CardProps = CharacterType;

function Card({ id, name, image }: CardProps) {
  return (
    <div
      key={id}
      className="max-w-sm overflow-hidden rounded bg-white shadow-lg"
    >
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default Card;
