import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss'

export const Footer = memo(() => {
  
    return (
      <>
        <div className={styles.footer}>
          <section className={styles.box__inquiry}>
            <div className={styles.box__layout}>
              <div className={styles.box__layout_heading}>
                <div className={styles.box__heading}>
                  <p className={styles.small}>INQUIRY</p>
                  <h2>お問い合わせ</h2>
                  <p className={styles.caption}>お問い合わせはメールフォーム、<br />またはお電話にてお気軽にご連絡ください。<br />その他ご連絡方法はこちらからご確認ください。</p>
                </div>
              </div>
              <div className={styles.box__layout_contents}>
                <ul>
                  <li className={styles.to_mailform}>
                    <div className={styles.heading__to_mailform}>
                      <h3>メールフォームから</h3>
                      <p>メールフォームからの<br />ご相談・お問い合わせはこちらからどうぞ。</p>
                    </div>
                    <div className={styles.inner__to_mailform}>
                      <div className={styles.layout_button}>
                        <Link href='/contact' legacyBehavior><a className="button target_this_site">メールフォームはこちら</a></Link>
                      </div>
                    </div>
                  </li>
                  <li className={styles.to_telephone}>
                    <div className={styles.heading__to_telephone}>
                      <h3>お電話から</h3>
                      <p>受付時間 : 9:30 ~ 17:30<br />定休日 : 毎週水曜日</p>
                    </div>
                    <div className={styles.inner__to_telephone}>
                      <p>フリーダイヤル</p>
                      <Link href='/' legacyBehavior><a className="">0120-690-315</a></Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.box__footer_nav}>

            <ul className={styles.box_nav_main_layout}>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}></p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/' legacyBehavior><a className="">トップページ</a></Link></li>
                </ul>
              </li>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}></p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/furniture-that-thinks' legacyBehavior><a className="">考える家具</a></Link></li>
                </ul>
              </li>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}>MARUTA Projects</p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/small-log' legacyBehavior><a className="">小さな丸太を生かす</a></Link></li>
                  <li className={styles.link}><Link href='/large-log' legacyBehavior><a className="">大きな丸太を循環させる</a></Link></li>
                </ul>
              </li>
            </ul>

            <ul className={styles.box_nav_main_layout}>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}>HIDACOLLE ICHIMAIITA</p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/ichimaiita' legacyBehavior><a className="">一枚板の家具</a></Link></li>
                  <li className={styles.link}><Link href='/ichimaiita/maintenance' legacyBehavior><a className="">テーブル修理・再生</a></Link></li>
                  <li className={styles.link}><Link href='/ichimaiita/drying' legacyBehavior><a className="">乾燥中の一枚板</a></Link></li>
                </ul>
              </li>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}>HIDACOLLE Costum furniture</p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/custom-furniture' legacyBehavior><a className="">ヒダコレのオーダー家具は、</a></Link></li>
                  <li className={styles.link}><Link href='/custom-furniture/kitchen' legacyBehavior><a className="">お困りごと解決事例(*6)</a></Link></li>
                </ul>
              </li>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}>Online challenge</p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/order-tables' legacyBehavior><a className="">オーダーテーブルをネットで</a></Link></li>
                  <li className={styles.link}><Link href='/original-products' legacyBehavior><a className="">こんな家具の暮らし</a></Link></li>
                  <li className={styles.link}><Link href='/handcrafts-of-hida' legacyBehavior><a className="">飛騨の手仕事</a></Link></li>
                </ul>
              </li>
            </ul>

            <ul className={styles.box_nav_main_layout}>
              <li className={styles.box_nav_main_list}>
                {/* <p className={styles.title}></p> */}
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/flagshipshop' legacyBehavior><a className="">ヒダコレ 家具ショップ</a></Link></li>
                </ul>
              </li>
              {/* <li className={styles.box_nav_main_list}>
                <p className={styles.title}></p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/note' legacyBehavior><a className="">ヒダコレノート</a></Link></li>
                </ul>
              </li> */}
            </ul>
          </section>

          <section className={styles.footer_box}>
              <div className={styles.layout_box}>
                  <div className={styles.left_contents}>
                      <div className={styles.shop_information}>
                          <p className={styles.title}>ヒダコレ ショップ</p>
                          <p className={styles.line}>営業時間 : 9:30-17:30 （水曜日 定休）</p>
                          <p className={styles.line}>電話番号 : 0577-57-7555<span className={styles.pc_only}> / </span><br className={styles.sp_only} />メール : info@hida-collection.shop</p>
                          <p className={styles.caption}>ウェブでのご注文は24時間365日承っています。</p>
                      </div>
                      <div className={styles.address}>
                          <p className={styles.line}>〒506-0055 岐阜県高山市上岡本町3-362</p>
                          <a className={styles.caption} href="https://g.page/hidacolle?share" target="_blank" rel="noopener">Google mapで地図をみる</a>
                      </div>
                  </div>
                  <div className={styles.right_contents}>
                      <p className={styles.badge}>公式SNS</p>
                      <p className={styles.line}>最新情報やヒダコレの今を更新中。<br />是非フォローしてね。</p>
                      <ul className={styles.sns_menu}>
                          <li><a href="https://www.instagram.com/hidacolle_kagu/" target="_blank" rel="noopener">Instagram</a></li>
                          <li><a href="https://www.facebook.com/hidacolle" target="_blank" rel="noopener">Facebook</a></li>
                          {/* <li><a href="https://lin.ee/lIjTB1c" target="_blank" rel="noopener">LINE</a></li> */}
                      </ul>
                  </div>
              </div>
              <div className={styles.site_information}>
                  <ul className={styles.site_information_menu}>
                      <li><a href="/view/page/order-guide">ご注文・お問合わせガイド</a></li>
                      <li><a href="/view/contract">特定商取引法に基づく表示</a></li>
                      <li><a href="/view/policy">プライバシーポリシー</a></li>
                      <li><a href="/view/company">会社概要</a></li>
                  </ul>
                  <p className={styles.copyright}>© HIDACOLLE All Rights Reserved.</p>
              </div>
          </section>

        </div>
      </>
    );
  })