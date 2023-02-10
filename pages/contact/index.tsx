import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";

import { useForm, FormProvider } from "react-hook-form";

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

import Confirm from 'components/Contact/Confirm'
import Input from 'components/Contact/Input'

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
        {
            name: "お問合わせ",
            url: ""
        }
    ];

    // パラメータを取得
    const router = useRouter();
    const isConfirm = router.query.confirm;

    // useFormの設定&使用したい機能を呼び出す
    const methods = useForm({
        mode: "onChange",
        criteriaMode: "all"
    });

    return (
        <>
            <PageHead
                pageTitle = "お問合わせ"
                pageDescription = "お見積もりまでは何度でも無料ですので、みなさん「お試し感覚」でご利用いただいています。お名前・メールアドレスだけでも構いませんので、まずはお気軽にお問合せください。"
                pagePath = "https://www.hidacolle.com/contact"
                pageImg = ""
                pageImgWidth = ""
                pageImgHeight = ""
            />

            <section className="contents-body body-contact">

                <BreadList list={bread_list}></BreadList>

                <h1 className='heading'>お問合わせ</h1>

                <div className="caption">
                    <p>お見積もりまでは何度でも無料ですので、<br />みなさん「お試し感覚」でご利用いただいています。<br />お名前・メールアドレスだけでも構いませんので、<br />まずは以下よりお気軽にお問合せください。</p>
                </div>

                <div className="box__contents">

                    <FormProvider {...methods}>
                        {!isConfirm ? (
                        <>
                            <Input />
                        </>
                        ) : (
                        <>
                            <Confirm />
                        </>
                        )}
                    </FormProvider>

                </div>

                <div className="box__selectable">
                    <div className="heading__selectable">
                        <h2>選べるご相談方法</h2>
                        <p className='s_caption'>ヒダコレではお客さのご都合の良い方法でご相談いただけるよう、<br />様々な選べるご相談方法をご用意しております。</p>
                    </div>

                    <div className="contents__selectable">
                        <div className="layout__selectable">
                            <div className="block__select">
                                <div className="layout__info">
                                    <h3>電話・メールでご相談</h3>
                                    <div className="catch">
                                        <Image
                                            src="/images/contact/telormail.png"
                                            alt=""
                                            width={320}
                                            height={203}
                                        />
                                    </div>
                                    <div className="s_caption">
                                        <p>もちろん、お電話・メールでのご相談も可能です。</p>
                                        <p>商品の在庫や手配状況の確認はもちろん、インテリア選びのご相談も手厚く受け付けています。メールは、おおよそ翌営業日には、回答をさせていただきます。</p>
                                    </div>
                                </div>
                                <div className="layout__buttons">
                                    <a className="block__button" href="tel:0120-690-315">お電話 : 0120-690-315</a>
                                </div>
                            </div>
                            <div className="block__select">
                                <div className="layout__info">
                                    <h3>店頭でご相談</h3>
                                    <div className="catch">
                                        <Image
                                            src="/images/contact/shop.png"
                                            alt=""
                                            width={320}
                                            height={203}
                                        />
                                    </div>
                                    <div className="s_caption">
                                        <p>ヒダコレ家具は飛騨高山に実店舗がございます。</p>
                                        <p>土日は比較的混むため、ご来店予定・ご相談予定のお客様は事前予約をおすすめします。当日は予約のお客様を優先的にご案内しております。</p>
                                        <p>「じっくり相談したい」というお客様は、ぜひ事前にお電話でご予約いただければと思います。</p>
                                    </div>
                                </div>
                                <div className="layout__buttons">
                                    <a className="block__button" href="tel:0120-690-315">お電話 : 0120-690-315</a>
                                </div>
                            </div>
                            <div className="block__select">
                                <div className="layout__info">
                                    <h3>画面共有でご相談</h3>
                                    <div className="catch">
                                        <Image
                                            src="/images/contact/view.png"
                                            alt=""
                                            width={320}
                                            height={203}
                                        />
                                    </div>
                                    <div className="s_caption">
                                        <p>画面越しに家族みんなで参加できるから、 ひとりひとりの声が伝えられます。</p>
                                        <p>資料や、お部屋を見ながら話せるから、ご相談もスムーズに。</p>
                                        <p>まずはお問合せから「オンライン画面共有でのご相談」とお伝えください。ヒダコレスタッフからスケジュールなどの調整などをご案内させていただきます。</p>
                                        <div className="attention">※平日限定／事前予約制となります。</div>
                                    </div>
                                </div>
                                <div className="layout__buttons">
                                    <a className="block__button" href="/contact">ご予約はこちら</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Home;