import { memo, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss'

export const Header = memo(() => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleFunction = () => {
    setOpenMenu(!openMenu);
  }

  return (
      <>

        <div className={styles.header}>
          <div className={styles.inner_header}>
            <div className={styles.box_logo}>
              <Image
                src="/logo.svg"
                alt="ヒダコレ家具 公式ウェブサイト"
                width={355}
                height={40}
              />
            </div>
            <div className={styles.box_nav}>
              <div className={styles.box_contact}>
                <Link href='/' legacyBehavior><a className={styles.pc_navbar_button}>ご相談・お問い合わせはこちら</a></Link>
              </div>

              <div className={styles.box_nav_button} onClick={() => toggleFunction()}>
                <Link href='/' legacyBehavior><a className={styles.pc_navbar_button}>メニュー</a></Link>
              </div>

            </div>
          </div>
        </div>

        <div className={`${styles.pc_header_menu} ${openMenu ? styles.open : styles.close}`}>
          <div className={styles.close} onClick={() => toggleFunction()}>
            <p>Close</p>
          </div>
          <p><Link href='/' legacyBehavior><a className="">トップ</a></Link></p>
          <p><Link href='/furniture-that-thinks' legacyBehavior><a className="">考える家具</a></Link></p>
          <p><Link href='/small-log' legacyBehavior><a className="">小さな丸太を生かす</a></Link></p>
          <p><Link href='/large-log' legacyBehavior><a className="">大きな丸太を循環させる</a></Link></p>
          <p><Link href='/ichimaiita' legacyBehavior><a className="">一枚板の家具</a></Link></p>
          <p><Link href='/' legacyBehavior><a className="">一枚板詳細ページ(*6)(no url)</a></Link></p>
          <p><Link href='/ichimaiita/drying' legacyBehavior><a className="">乾燥中の一枚板</a></Link></p>
          <p><Link href='/ichimaiita/maintenance' legacyBehavior><a className="">テーブル修理・再生</a></Link></p>
          <p><Link href='/custom-furniture' legacyBehavior><a className="">ヒダコレのオーダー家具は、</a></Link></p>
          <p><Link href='/custom-furniture/kitchen' legacyBehavior><a className="">お困りごと解決事例(*6)</a></Link></p>
          <p><Link href='/order-tables' legacyBehavior><a className="">オーダーテーブルをネットで</a></Link></p>
          <p><Link href='/original-products' legacyBehavior><a className="">こんな家具の暮らし</a></Link></p>
          <p><Link href='/handcrafts-of-hida' legacyBehavior><a className="">飛騨の手仕事</a></Link></p>
          <p><Link href='/flagshipshop' legacyBehavior><a className="">ヒダコレ 家具ショップ</a></Link></p>
        </div>
      </>
  );
})