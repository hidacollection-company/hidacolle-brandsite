import { memo, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { Inquiry } from 'components/CtaBox/Inquiry';

export const Header = memo(() => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleFunction = () => {
    setOpenMenu(!openMenu);
  }

  const router = useRouter(); 

  useEffect(() => {
    setOpenMenu(false);
      },[ router.pathname ]
  );

  return (
      <>

        <div className={styles.header}>
          <div className={styles.inner_header}>
            <div className={styles.box_logo}>
              <Link href='/' legacyBehavior>
                <a>
                  <Image
                    src="/logo.svg"
                    alt="ヒダコレ家具 公式ウェブサイト"
                    width={300}
                    height={54}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.box_nav}>
              <div className={styles.box_contact}>
                <Link href='/contact' legacyBehavior><a className={styles.pc_navbar_button}>ご相談・お問い合わせはこちら</a></Link>
              </div>

              <div className={styles.box_nav_button} onClick={() => toggleFunction()}>
                <button className={styles.pc_navbar_button}>メニュー</button>
              </div>

            </div>
          </div>
        </div>


        <div className={`${styles.pc_header_menu} ${openMenu ? styles.open : styles.close}`}>

          <div className={styles.header}>
            <div className={styles.inner_header}>
              <div className={styles.box_logo}>
              <Link href='/' legacyBehavior>
                <a>
                  <Image
                    src="/logo.svg"
                    alt="ヒダコレ家具 公式ウェブサイト"
                    width={355}
                    height={40}
                  />
                </a>
              </Link>
              </div>
              <div className={styles.box_nav}>
                <div className={styles.box_contact}>
                  <Link href='/contact' legacyBehavior><a className={styles.pc_navbar_button}>ご相談・お問い合わせはこちら</a></Link>
                </div>
                <div className={styles.box_nav_button} onClick={() => toggleFunction()}>
                  <button className={styles.pc_navbar_button}>メニュー</button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={styles.close} onClick={() => toggleFunction()}>
            <p>Close</p>
          </div> */}
          <div className={styles.box__nav}>
            <div className={styles.layout__nav}>
              <div className={styles.block__nav}>
                <Link href='/furniture-that-thinks' legacyBehavior>
                  <a className="">
                    考える家具
                    {/* <span className="en__mim">MARUTA Project</span> */}
                  </a>
                </Link>
                <Link href='/small-log' legacyBehavior>
                  <a className="">
                    小さな丸太を生かす
                    <span className="en__mim">MARUTA Project</span>
                  </a>
                </Link>
                <Link href='/large-log' legacyBehavior>
                  <a className="">
                    大きな丸太を循環させる
                    <span className="en__mim">MARUTA Project</span>
                  </a>
                </Link>
              </div>

              <div className={styles.block__nav}>
                <Link href='/ichimaiita' legacyBehavior>
                  <a className="">
                    一枚板の家具
                    <span className="en__mim">Ichimaiita Furniture</span>
                  </a>
                </Link>
                <Link href='/ichimaiita/maintenance' legacyBehavior>
                  <a className="">
                    テーブル修理・再生
                    <span className="en__mim">Ichimaiita Furniture</span>
                  </a>
                </Link>
                <Link href='/custom-furniture' legacyBehavior>
                  <a className="">
                    ヒダコレのカスタムオーダー家具は、
                    <span className="en__mim">Costum furniture</span>
                  </a>
                </Link>
              </div>

              <div className={styles.heading__online_challnege}><span>Online challenge</span></div>
              <div className={`${styles.block__nav} ${styles.block__online_challnege}`}>
                <Link href='/order-tables' legacyBehavior>
                  <a className="">
                    オーダーテーブルをネットで
                    <span className="en__mim">Order tables. online.</span>
                  </a>
                </Link>
                <Link href='/original-products' legacyBehavior>
                  <a className="">
                    こんな家具のある暮らし
                    <span className="en__mim">Original products</span>
                  </a>
                </Link>
                <Link href='/handcrafts-of-hida' legacyBehavior>
                  <a className="">
                    飛騨の手仕事
                    <span className="en__mim">Handcrafts of hida</span>
                  </a>
                </Link>
              </div>

              <div className={styles.block__nav}>
                <Link href='/flagshipshop' legacyBehavior>
                  <a className="">
                    ヒダコレ 家具ショップ
                    <span className="en__mim">Flagship shop</span>
                  </a>
                </Link>
              </div>

              <div className={styles.layout__Inquiry}>
                <Inquiry />
              </div>
            </div>
          </div>
        </div>
      </>
  );
})