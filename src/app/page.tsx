import Image from "next/image";
import { Button } from '@/components/common/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="カフェの内装"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-shadow mb-6">
              心地よい空間で、
              <br />
              最高のコーヒーを
            </h1>
            <p className="text-lg mb-8 text-shadow">
              厳選された豆と熟練のバリスタが織りなす、
              <br />
              至福のひとときをお届けします。
            </p>
            <Link href="/menu">
              <Button variant="primary" className="text-lg px-8 py-3">
                メニューを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cream">
        <div className="container">
          <h2 className="text-center mb-16">特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6 relative w-24 h-24 mx-auto">
                <Image
                  src="/images/coffee-beans.jpg"
                  alt="コーヒー豆"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="mb-4">厳選された豆</h3>
              <p className="text-gray">
                世界中から選りすぐりの豆を取り寄せ、
                最高の一杯をお届けします。
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6 relative w-24 h-24 mx-auto">
                <Image
                  src="/images/barista.jpg"
                  alt="バリスタ"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="mb-4">熟練のバリスタ</h3>
              <p className="text-gray">
                経験豊富なバリスタが、一杯一杯
                丁寧に抽出いたします。
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6 relative w-24 h-24 mx-auto">
                <Image
                  src="/images/interior.jpg"
                  alt="店内"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="mb-4">居心地の良い空間</h3>
              <p className="text-gray">
                木を基調とした温かみのある店内で、
                ゆったりとした時間をお過ごしください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-center mb-16">お知らせ</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <time className="text-sm text-gray">2024.02.28</time>
              <h3 className="mt-2 mb-4">春の新メニューが登場</h3>
              <p className="text-gray">
                桜をイメージしたドリンクや、春野菜を使用した
                季節限定メニューをご用意しました。
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <time className="text-sm text-gray">2024.02.20</time>
              <h3 className="mt-2 mb-4">営業時間変更のお知らせ</h3>
              <p className="text-gray">
                3月1日より、平日の営業時間を8:00-20:00に
                変更させていただきます。
              </p>
            </article>
          </div>
          <div className="text-center mt-12">
            <Link href="/news">
              <Button variant="secondary">
                お知らせ一覧へ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
