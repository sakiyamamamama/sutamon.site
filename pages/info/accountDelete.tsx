import Layout from "@/components/layout/layout";
import { MAILADDLESS } from "@/constants/appInfo";

export default function DeleteAccountPage() {
  return (
    <Layout>
        <div className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-3xl font-bold mb-8">アカウント削除について</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">削除方法</h2>
                <p>
                アプリ内の「メニュー ＞ アカウント管理」から「アカウント削除」を選択することで削除が可能です。
                削除手続きを完了すると、直ちにアカウントおよび関連データが削除されます。
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">削除されるデータ</h2>
                <ul className="list-disc list-inside space-y-1">
                <li>登録情報（メールアドレスなど）</li>
                <li>勉強履歴</li>
                <li>モンスターの成長データ</li>
                <li>ランキング情報</li>
                </ul>
                <p className="mt-2 text-red-600 font-medium">
                ※一度削除されたデータは復元できません。
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">削除できないデータ</h2>
                <p>
                法令に基づき一定期間保存が必要なログ情報を除き、すべてのデータが削除されます。
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">お問い合わせ</h2>
                <p>
                アカウント削除に関してご不明点がある場合は、以下のメールアドレスまでご連絡ください。
                </p>
                <p className="mt-2 font-medium">{MAILADDLESS}</p>
            </section>
            </div>
    </Layout>
  );
}
