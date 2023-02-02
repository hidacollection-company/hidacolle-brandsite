import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './Links.module.scss'

export const Links = memo((props) => {
  return (
      <>
        <div className={styles.box_links}>
          <section className={`${styles.block_link} ${props.index_contents ? styles.index_contents : ''}`}>
            <div className={styles.heading_link}>
              <h2>一枚板の家具</h2>
            </div>
            <div className={styles.visual_link}>
              <Link href='/'>
                <Image
                  src="/images/ichimaiita/index/001.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </Link>
            </div>
            <div className={styles.inner_link}>
              <p>ヒダコレ工房では、お好みの一枚板からテーブルやカウンター、デスクやテレビボードなど、お客様のご希望に応じて色々な一枚板家具をお作りできます。</p>
            </div>


            {props.this_page_ichimaiita_index &&
              <p className={styles.this_page}>今見ているページです</p>
            }

            {!props.this_page_ichimaiita_index &&
              <div className={styles.layout__button_centering}>
                <div className={styles.layout_button}>
                  <Link href='/ichimaiita' legacyBehavior>
                    <a className="button target_this_site">一枚板の家具をみる</a>
                  </Link>
                </div>
              </div>
            }

          </section>
          <section className={`${styles.block_link} ${props.index_contents ? styles.index_contents : ''}`}>
            <div className={styles.heading_link}>
              <h2>テーブル修理・再生</h2>
            </div>
            <div className={styles.visual_link}>
              <Link href='/'>
                <Image
                  src="/images/ichimaiita/maintenace/001.jpg"
                  alt="Picture of the author"
                  width={1280}
                  height={855}
                />
              </Link>
            </div>
            <div className={styles.inner_link}>
              <p>使い古したテーブルでもメンテナンスできれいにすること、修理して別の家具に再生することができます。また必要なくなったテーブルの買い取りなどにも取り組んでいます。</p>
            </div>

            {!props.this_page_ichimaiita_other &&
              <div className={styles.layout__button_centering}>
                <div className={styles.layout_button}>
                  <Link href='/ichimaiita/maintenance' legacyBehavior>
                    <a className="button target_this_site">テーブル修理・再生をもっとみる</a>
                  </Link>
                </div>
              </div>
            }

            {props.this_page_ichimaiita_other &&
              <p className={styles.this_page}>今見ているページです</p>
            }

          </section>
        </div>
      </>
  );
})

export default Links;