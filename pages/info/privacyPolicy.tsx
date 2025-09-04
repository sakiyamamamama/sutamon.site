import Section from "@/components/info/section";
import Layout from "@/components/layout/layout"
import { DocContent } from "@/types/docContent";

const PrivacyPolicyPage=()=>{
    const privacyPolicy:DocContent[] = [
        {text:"ユーザーの個人情報管理には細心の注意を払い、以下に書かれた通りに扱います"},
        {text:"",title:"収集するデータ"},
        {
            title:"お問い合わせ時の際の情報収集",
            text:`お問い合わせに際して収集する情報は、以下の通りです。これらの情報は、お問い合わせへの対応および本アプリの品質向上を目的として利用いたします。\n
•    送信元のメールアドレス
•    端末を識別する情報
•    お問い合わせの内容`},
        {
            title:"個人情報の取り扱いについて",
            text:`
当サービスでは、ユーザーからお預かりする個人情報について、常に正確かつ最新の情報を維持できるよう努めています。
また、外部からの不正なアクセスや情報の紛失・改ざん・漏洩などのリスクを未然に防ぐため、必要なセキュリティ対策を講じ、慎重に管理を行っております。`
        },
        {
            title:"第三者への情報提供について",
            text:`
ユーザーの個人情報を第三者に開示または提供することは原則としてありません。
ただし、以下のいずれかに該当する場合に限り、情報を開示する場合があります。\n
•    本人の同意が確認できた場合
•    法律に基づく正式な要請があった場合`
        },
    ]

    return (
        <Layout>
            <div className="max-w-3xl mx-auto px-6 py-20">
                <h1 className="text-3xl font-bold text-slate-950">プライバシーポリシー</h1>
                {privacyPolicy.map((p,i)=><Section text={p.text} title={p.title} key={i} />)}
            </div>
        </Layout>
    )
}

export default PrivacyPolicyPage;