import Image from 'next/image';
import { motion } from 'framer-motion';

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

export const MenuCard = ({ name, description, price, image, category }: MenuCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        {category && (
          <span className="absolute top-2 left-2 bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-gray text-sm mb-2">{description}</p>
        <p className="text-price font-medium text-primary">
          ¥{price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}; 