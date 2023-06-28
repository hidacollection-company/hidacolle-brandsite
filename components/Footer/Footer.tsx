import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss'

import { Inquiry } from 'components/CtaBox/Inquiry'

export const Footer = memo(() => {

    return (
      <>
        <div className={styles.footer}>

          <div className={styles.layout__Inquiry}>
            <Inquiry />
          </div>

          <section className={styles.box__follow_us}>
            <div className={styles.layout__follow_us}>
              <p className={styles.title}>Follow us</p>
              <p className={styles.caption}>ヒダコレ家具の最新情報は各種SNSでも発信しています。<br />ぜひフォローしてくださいね。</p>
              <ul className={styles.buttons}>
                <li>
                  <div className={styles.layout_button}>
                    <Link href='https://www.instagram.com/hidacolle_kagu/' legacyBehavior>
                      <a className="button instagram target_blank" target="_blank" rel="noopener">Instagram</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="layout-button">
                    <Link href='https://www.facebook.com/hidacolle/' legacyBehavior>
                      <a className="button facebook target_blank" target="_blank" rel="noopener">Facebook</a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.box__footer_nav}>

            <ul className={styles.box_nav_main_layout}>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}></p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/' legacyBehavior><a>トップページ</a></Link></li>
                </ul>
              </li>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}></p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/furniture-that-thinks' legacyBehavior><a>考える家具</a></Link></li>
                </ul>
              </li>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}>MARUTA Project</p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/small-log' legacyBehavior><a>小さな丸太を生かす</a></Link></li>
                  <li className={styles.link}><Link href='/large-log' legacyBehavior><a>大きな丸太を循環させる</a></Link></li>
                </ul>
              </li>
            </ul>

            <ul className={styles.box_nav_main_layout}>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}>Ichimaiita furniture</p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/ichimaiita' legacyBehavior><a>一枚板の家具</a></Link></li>
                  <li className={styles.link}><Link href='/ichimaiita/maintenance' legacyBehavior><a>テーブル修理・再生</a></Link></li>
                  <li className={styles.link}><Link href='/ichimaiita/drying' legacyBehavior><a>乾燥中の一枚板</a></Link></li>
                </ul>
              </li>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}>Costum furniture</p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/custom-furniture' legacyBehavior><a>ヒダコレのオーダー家具は、</a></Link></li>
                  {/* <li className={styles.link}><Link href='/custom-furniture/kitchen' legacyBehavior><a>お困りごと解決事例(*6)</a></Link></li> */}
                </ul>
              </li>
              <li className={styles.box_nav_main_list}>
                <p className={styles.title}>Online challenge</p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/order-tables' legacyBehavior><a>オーダーテーブルをネットで</a></Link></li>
                  <li className={styles.link}><Link href='/original-products' legacyBehavior><a>こんな家具のある暮らし</a></Link></li>
                  <li className={styles.link}><Link href='/handcrafts-of-hida' legacyBehavior><a>飛騨の手仕事</a></Link></li>
                </ul>
              </li>
            </ul>

            <ul className={styles.box_nav_main_layout}>
              <li className={styles.box_nav_main_list}>
                {/* <p className={styles.title}></p> */}
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/flagshipshop' legacyBehavior><a>ヒダコレ 家具ショップ</a></Link></li>
                </ul>
              </li>
              {/* <li className={styles.box_nav_main_list}>
                <p className={styles.title}></p>
                <ul className={styles.list_links}>
                  <li className={styles.link}><Link href='/note' legacyBehavior><a>ヒダコレノート</a></Link></li>
                </ul>
              </li> */}
            </ul>
          </section>

          <section className={styles.footer_box}>
              <div className={styles.layout_box}>
                  <div className={styles.left_contents}>
                      <div className={styles.shop_information}>
                          <p className={styles.title}>ヒダコレ家具</p>
                          <p className={styles.line}>〒506-0055 岐阜県高山市上岡本町3-362</p>
                          <p className={styles.line}>営業時間 : 9:30-17:30 （水曜日 定休）</p>
                          <p className={styles.line}>電話番号 : 0120-690-315<span className="pc_only"> / </span><br className="sp_only" />メール : info@hidacolle.com</p>
                      </div>
                      <div className={styles.googlemap}>
                          <a className={styles.caption} href="https://g.page/hidacolle?share" target="_blank" rel="noopener">Google mapで地図をみる</a>
                      </div>
                      <div className={styles.webshop_information}>
                        <p className={styles.caption}>ウェブでのご注文は24時間365日承っています。</p>
                        <a className={styles.caption} href="https://www.hida-collection.shop/" target="_blank" rel="noopener">https://www.hida-collection.shop/</a>
                      </div>
                  </div>
                  <div className={styles.right_contents}>
                      <p className={styles.badge}>公式SNS</p>
                      <p className={styles.line}>最新情報やヒダコレの今を更新中。<br />是非フォローしてね。</p>
                      <ul className={styles.sns_menu}>
                          <li><a href="https://www.instagram.com/hidacolle_kagu/" target="_blank" rel="noopener">Instagram</a></li>
                          <li><a href="https://www.facebook.com/hidacolle" target="_blank" rel="noopener">Facebook</a></li>
                      </ul>
                  </div>
              </div>
              <div className={styles.site_information}>
                  <ul className={styles.site_information_menu}>
                      <li><a href="/privacy">プライバシーポリシー</a></li>
                      <li><a href="/company">会社概要</a></li>
                  </ul>
                  <p className={styles.copyright}>© HIDACOLLE All Rights Reserved.</p>
              </div>
          </section>

        </div>
      </>
    );
  })