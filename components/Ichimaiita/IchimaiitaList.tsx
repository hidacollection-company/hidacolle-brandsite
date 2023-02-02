import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './IchimaiitaList.module.scss'

export const IchimaiitaList = memo((props) => {
  return (
      <>
        <section className={styles.box_items}>
          <p className={styles.heading}>今すぐ買える、使える一枚板は、<br />こちらからお選びいただけます!!</p>
          <ul className={styles.items}>
            <li>
              <Link href='/ichimaiita/example/keyaki'>
                <div className={`${styles.visual_item} add_corner `}>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/keyaki/001.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div className={styles.title_item}>欅の一枚板</div>
                <div className={styles.inner_item}>
                  <table>
                    <tbody>
                      <tr>
                        <th>サイズ</th>
                        <td>1000*1000*1000 (mm)</td>
                      </tr>
                      <tr>
                        <th>管理番号</th>
                        <td>123456</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/ichimaiita/example/kuri'>
                <div className={`${styles.visual_item} add_corner `}>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/kuri/001.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div className={styles.title_item}>栗の一枚板</div>
                <div className={styles.inner_item}>
                  <table>
                    <tbody>
                      <tr>
                        <th>サイズ</th>
                        <td>1000*1000*1000 (mm)</td>
                      </tr>
                      <tr>
                        <th>管理番号</th>
                        <td>123456</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/ichimaiita/example/kusu'>
                <div className={`${styles.visual_item} add_corner `}>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/kusu/001.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div className={styles.title_item}>楠の一枚板</div>
                <div className={styles.inner_item}>
                  <table>
                    <tbody>
                      <tr>
                        <th>サイズ</th>
                        <td>1000*1000*1000 (mm)</td>
                      </tr>
                      <tr>
                        <th>管理番号</th>
                        <td>123456</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/ichimaiita/example/mizumezakura'>
                <div className={`${styles.visual_item} add_corner `}>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/mizumezakura/001.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div className={styles.title_item}>水目桜の一枚板</div>
                <div className={styles.inner_item}>
                  <table>
                    <tbody>
                      <tr>
                        <th>サイズ</th>
                        <td>1000*1000*1000 (mm)</td>
                      </tr>
                      <tr>
                        <th>管理番号</th>
                        <td>123456</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/ichimaiita/example/tochi'>
                <div className={`${styles.visual_item} add_corner `}>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/tochi/001.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div className={styles.title_item}>栃の一枚板</div>
                <div className={styles.inner_item}>
                  <table>
                    <tbody>
                      <tr>
                        <th>サイズ</th>
                        <td>1000*1000*1000 (mm)</td>
                      </tr>
                      <tr>
                        <th>管理番号</th>
                        <td>123456</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/ichimaiita/example/yamazakura'>
                <div className={`${styles.visual_item} add_corner `}>
                  <Image
                    // loader={myLoader}
                    src="/images/ichimaiita/example/yamazakura/001.jpg"
                    alt="Picture of the author"
                    width={1280}
                    height={855}
                  />
                </div>
                <div className={styles.title_item}>山桜の一枚板</div>
                <div className={styles.inner_item}>
                  <table>
                    <tbody>
                      <tr>
                        <th>サイズ</th>
                        <td>1000*1000*1000 (mm)</td>
                      </tr>
                      <tr>
                        <th>管理番号</th>
                        <td>123456</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </>
  );
})

export default IchimaiitaList;