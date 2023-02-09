import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
        {
            name: "お問合わせ",
            url: ""
        }
    ];

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

                

            </section>
        </>
    );
};

export default Home;