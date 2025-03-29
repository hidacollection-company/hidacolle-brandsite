import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { BreadList } from 'components/BreadList/BreadList'

const Home: NextPage = () => {

    const bread_list : { [key: string]: string }[] = [
        {
            name: "働き方への取り組み",
            url: ""
        }
    ];

    return (
        <>
            <PageHead
                pageTitle = "働き方への取り組み"
                pageDescription = "働き方への取り組みのページです。"
                pageRobots = ""
                pagePath = "https://www.hidacolle.com/privacy"
                pageImg = ""
                pageImgWidth = ""
                pageImgHeight = ""
            />

            <section className="contents-body body-initiatives-for-work-styles">

                <BreadList list={bread_list}></BreadList>

                <h1 className='heading'>働き方への取り組み</h1>

                <div className="catch-images">
                    <Image
                        src="/images/index/initiatives-for-work-styles.jpg"
                        alt="「働き方への取り組み」のイメージ写真"
                        width={660}
                        height={435}
                    />
                </div>

                <div className="box--think-work-styles">
                    <h2>”はたらく”を考える</h2>
                    <p>
                        日本における職場環境や女性が働きやすい環境づくり、また時間外労働など、取り組むべき課題が多くあります。<br />
                        ヒダコレ家具では、働く社員にとって、当社が働きやすく、より良い職場環境となることを考え、実行します。
                    </p>
                </div>

                <div className="box--content-1">
                    <h2>次世代育成支援対策推進法に基づく<br className='sp_only' />一般事業主行動計画</h2>
                    <p>社員が仕事と子育てを両立させることができ、女性のみならず全社員がその能力を十分に発揮できるようにするため、次のように行動計画を策定する。</p>
                </div>

                <div className="box--period">
                    <h2>計画期間</h2>
                    <p>2025年3月1日～2028年2月28日までの3年間</p>
                </div>

                <div className="box--list">
                    <div className="list--head">
                        <h2>計画内容</h2>
                    </div>
                    <div className="list-items">
                        <div className="list-item">
                            <div className="the-goal">
                                <div className="the-goal-head">
                                    <p className='the-goal-head-title'>目標 1</p>
                                    <p className='the-goal-head-caption'>計画期間内において女性社員の育児休業取得率100％を<br className='pc_only' />目指すとともに、男性社員の取得率60％以上を目指します。</p>
                                </div>
                                <div className="the-goal-body">
                                    <div className="body-title">対策・取り組み</div>
                                    <div className="body-items">
                                        <div className="body-item">
                                            <div className="body-item-head">2025年3月 -</div>
                                            <div className="body-item-caption">女性の育児休業取得率100％を目指するため、育児休業に入る社員や復職予定の社員に対するフォローアップを充実させ、育児休業からの円滑な職場復帰を支援する。</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="the-goal">
                                <div className="the-goal-head">
                                    <p className='the-goal-head-title'>目標 2</p>
                                    <p className='the-goal-head-caption'>男性が育児休業を取得しやすい環境を整備するとともに、<br className='pc_only' />男性の育児参画を促す取組みを実施する。</p>
                                </div>
                                <div className="the-goal-body">
                                    <div className="body-title">対策・取り組み</div>
                                    <div className="body-items">
                                        <div className="body-item">
                                            <div className="body-item-head">2025年3月 -</div>
                                            <div className="body-item-caption">社員の家族のライフバランスも充実させるため、<br className='pc_only' />男性社員の育児休暇の利用促進に向けて環境整備をする。</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="the-goal">
                                <div className="the-goal-head">
                                    <p className='the-goal-head-title'>目標 3</p>
                                    <p className='the-goal-head-caption'>育児期の女性が家庭との積極的な両立を図り、<br className='pc_only' />能力を発揮して活躍できるようにするための取組みを実施する。</p>
                                </div>
                                <div className="the-goal-body">
                                    <div className="body-title">対策・取り組み</div>
                                    <div className="body-items">
                                        <div className="body-item">
                                            <div className="body-item-head">2025年3月 -</div>
                                            <div className="body-item-caption">各職場における休業者の業務カバー体制、複数担当者体制、<br className='pc_only' />多機能化などの検討、実施をする。</div>
                                        </div>
                                        <div className="body-item">
                                            <div className="body-item-head">2026年3月 -</div>
                                            <div className="body-item-caption">ワークライフバランス・両立推進に向け、リモートでの仕事、時短勤務などの柔軟かつ多様な働き方について環境整備を進める。</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="the-goal">
                                <div className="the-goal-head">
                                    <p className='the-goal-head-title'>目標 4</p>
                                    <p className='the-goal-head-caption'>所定外労働を削減するために、ノー残業デーを設定、実施する。</p>
                                </div>
                                <div className="the-goal-body">
                                    <div className="body-title">対策・取り組み</div>
                                    <div className="body-items">
                                        <div className="body-item">
                                            <div className="body-item-head">2025年9月 -</div>
                                            <div className="body-item-caption">毎週ノー残業デーを設定して、実施する。</div>
                                        </div>
                                    </div>
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