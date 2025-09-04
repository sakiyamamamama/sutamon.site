import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 情報セクション */}
        <section>
          <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">情報</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/info/privacyPolicy"
                className="hover:text-white transition"
              >
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link
                href="/info/accountDelete"
                className="hover:text-white transition"
              >
                アカウント削除について
              </Link>
            </li>
          </ul>
        </section>

        {/* 追加セクション（必要なら） */}
        <section>
          <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">サポート</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/support/contact" className="hover:text-white transition">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </section>

        {/* ブランド名 / コピーライト */}
        <section className="flex flex-col justify-between">
          <h1 className="text-lg font-bold text-white">スタディーモンスター</h1>
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            © 2025 My App. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
