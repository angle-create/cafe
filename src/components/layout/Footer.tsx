import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display mb-4">Café</h3>
            <p className="text-sm opacity-80">
              最高品質のコーヒーと心地よい空間を提供する、
              あなたのお気に入りの場所になることを目指しています。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-display mb-4">営業時間</h4>
            <p className="text-sm opacity-80">
              月曜日 - 金曜日: 8:00 - 20:00<br />
              土曜日・日曜日: 10:00 - 18:00
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-display mb-4">お問い合わせ</h4>
            <p className="text-sm opacity-80">
              〒123-4567<br />
              東京都渋谷区○○1-2-3<br />
              TEL: 03-1234-5678
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 