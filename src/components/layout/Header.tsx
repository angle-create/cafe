import Link from 'next/link';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: 'メニュー', href: '/menu' },
  { name: 'アクセス', href: '/access' },
  { name: 'お知らせ', href: '/news' },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold text-primary">
            Café
          </Link>
          
          <ul className="flex items-center space-x-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <motion.span
                    className="text-primary hover:text-accent transition-colors duration-300"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}; 