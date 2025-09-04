import Layout from "@/components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen pt-2">
        {/* Hero / Top */}
        <section id="top" className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-indigo-600 to-purple-700 text-white py-24 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">スタディモンスター</h1>
          <p className="text-lg md:text-2xl mb-6">勉強をモンスター育成に変える学習アプリ</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
            >
              App Store
            </a>
            <a
              href="#"
              className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
            >
              Google Play
            </a>
          </div>
          {/* スマホ画面イメージ */}
          <div className="mt-12">
            <img
              src="/icon.png"
              alt="アプリ画面"
              className="max-w-xs rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 bg-white text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="max-w-2xl mx-auto text-lg">
            スタディモンスターは、勉強時間に応じてモンスターが育つ学習サポートアプリです。
            「勉強を続けるのが楽しくなる」そんな体験を届けます。
          </p>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">📈 成長するモンスター</h3>
              <p>勉強時間に応じてモンスターが進化！勉強の成果が形になる。</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">🎯 目標設定</h3>
              <p>毎日の目標を立てて達成感を実感。継続の習慣が身につきます。</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">🏆 友達とランキング</h3>
              <p>友達と勉強時間を共有して、楽しく競い合おう！</p>
            </div>
          </div>
        </section>
      </div>

    </Layout>
  );
}
