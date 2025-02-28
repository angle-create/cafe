import { MenuCard } from '@/components/common/MenuCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { menuItems } from '@/constants/menu';

export default function MenuPage() {
  const drinkItems = menuItems.filter(item => item.category === 'drink');
  const foodItems = menuItems.filter(item => item.category === 'food');
  const dessertItems = menuItems.filter(item => item.category === 'dessert');

  return (
    <div className="py-12">
      <div className="container">
        <SectionHeader
          title="メニュー"
          subtitle="厳選された食材と丁寧な手仕事で、最高の一皿をお届けします"
        />

        {/* ドリンクメニュー */}
        <section className="mb-16">
          <SectionHeader
            title="ドリンク"
            subtitle="こだわりの豆から抽出した香り高いコーヒー"
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinkItems.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </section>

        {/* フードメニュー */}
        <section className="mb-16">
          <SectionHeader
            title="フード"
            subtitle="素材の味を活かしたシンプルな料理"
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodItems.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </section>

        {/* デザートメニュー */}
        <section className="mb-16">
          <SectionHeader
            title="デザート"
            subtitle="心温まる手作りスイーツ"
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dessertItems.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 