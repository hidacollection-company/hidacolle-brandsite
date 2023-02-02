import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GoToOnlineshop } from '../components/OnlineChallenge/GoToOnlineshop'

import fsPromises from 'fs/promises'
import path from 'path';

import {Link as Scroll} from "react-scroll"

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data.json');
  const data = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(data)
  return {
    props: objectData
  }
}

export function getImageSrc(name: string, size: string): string {
  return `/images/handcrafts-of-hida/${name}_${size}.jpg`
}

export function getOddEven(id: number): string {
  if((id % 2) === 0){
    return `block-craftman reverse`
  } else {
    return `block-craftman`
  }
}

const Home: NextPage = (props) => {

    const postLists = props.postLists;

    return (
      <div className="contents-body body-handcrafts-of-hida">
        {/* パンクズ */}
        <div className="box__beadlist">パンクズナビ</div>

        {/* Component */}
        <div className="box-heading">
          <div className="inner-heading">
            <p className="catch">Online challenge</p>
            <div className="heading">
              <h1>飛騨の手仕事</h1>
              <div className="caption">
                <div className="layout-button">
                  <Link href='/' legacyBehavior><a className="go_to_online target_blank">オンラインショップでみる</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="visual-heading">
            <Image
              src="/test.jpg"
              alt="Picture of the author"
              width={1280}
              height={855}
            />
          </div>
        </div>

        <section className='box-introduction'>
          <p className='heading-introduction'>
            飛騨という場所で、<br />
            家具づくりをする。<br />
            ということ。
          </p>
          <div className='bold-introduction'>
            <p>私達は、家具をつくるプロセスもお客様と共有したいと考えています。</p>
            <p>丸太の状態から素材に触れ、どう使っていくのかを一緒に考える。</p>
            <p>そんな機会をつくりたくて、土場や製材の現場にお客様をお連れし、一緒に周ることもしばしば。時には一緒に森に入り、”生きている木”を見に行くことだってあります。</p>
            <p>店頭に並んでいるのを選ぶのもいいけれど、つくる過程にこだわった自分だけの特別な家具もきっといい。</p>
            <p>そんな特別な体験が、暮らしや家具を大事にするきっかけに。そして、それを支えてくれている森や木のことについて考えるきっかけになると良いなとヒダコレは思っています。</p>
          </div>
        </section>

        <section className="box-products">
 
          <p className="heading-products">飛騨の作家</p>

          <nav className="nav-craftman">
            {postLists.map(post =>
              <Scroll to={post.slug} smooth={true} duration={600} offset={-105}>
                <p className="profession">{post.profession}</p>
                <p className="name">{post.name}</p>
              </Scroll>
            )}
          </nav>

          <div className="box-craftman">
            {postLists.map(post =>
              // <article className="block-craftman" key={post.id}>
              <article id={post.slug} className={getOddEven(post.id)} key={post.id}>
                <div className="inner-craftman">
                  <p className='profession'>{post.profession}</p>
                  <h2 className='name'>{post.name}</h2>
                  <div className='caption' dangerouslySetInnerHTML={{__html: `${post.caption}`}}></div>
                  <div className="layout-button">
                    <Link href={post.ec_url} legacyBehavior passHref><a target="_blank" rel="noopener noreferrer" className="button target_blank">オンラインショップでみる</a></Link>
                  </div>
                </div>
                <div className="visual-craftman">
                  <div className="image-bigger">
                    <Image
                      src={getImageSrc(post.slug,'main')}
                      alt={`${post.name}さんの写真`}
                      width={1280}
                      height={855}
                    />
                  </div>
                  <div className="image-small">
                    <Image
                      src={getImageSrc(post.slug,'sub1')}
                      alt={`${post.name}さんの写真`}
                      width={1280}
                      height={855}
                    />
                    <Image
                      src={getImageSrc(post.slug,'sub2')}
                      alt={`${post.name}さんの写真`}
                      width={1280}
                      height={855}
                    />
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>

        <GoToOnlineshop
          slug="handcrafts-of-hida"
          caption="飛騨の手仕事の説明"
          ec_url="https://www.hida-collection.shop/view/category/hida-crafts"
        />
      </div>
    );
};

export default Home;