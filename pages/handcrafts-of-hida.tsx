import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { GoToOnlineshop } from 'components/OnlineChallenge/GoToOnlineshop'
import { BreadList } from 'components/BreadList/BreadList'

import {Link as Scroll} from "react-scroll"

import data from 'data.json'

interface postLists {
  id: string;
  slug: string;
  profession: string;
  name: string;
  caption: string;
  ec_url: string;
}

interface PropType { 
  data: postLists[];
}

export const getStaticProps = async () => {
  return {
    props: data
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

const Home: NextPage = () => {

  const bread_list : { [key: string]: string }[] = [
    {
      name: "飛騨の手仕事",
      url: ""
    }
  ];

  const postLists = data.postLists;

    return (
      <>
        <PageHead
          pageTitle = "飛騨の手仕事"
          pageDescription = "木工、陶芸、吹きガラス、張り子など、飛騨のクラフト作家をご紹介。「HIDA・COLLECTION」という名前には、飛騨のいいもの・こだわりのものを全国の人に知っていただきたいという思いがあります。飛騨の匠の歴史から続く工芸・民芸の文化と、飛騨の豊かな自然の中で丁寧につくりあげられた作品には、それぞれの作家さんの唯一無二の個性と温かみがあふれています。思わず手にとってしまうほど心惹かれるクラフト作品と出会えるところ。ヒダコレがそのような場所と機会になれるように、今まで通りに「飛騨のいいもの・こだわり」をご紹介していきたいと思います。"
          pagePath = "https://www.hidacolle.com/handcrafts-of-hida"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-handcrafts-of-hida">

          <BreadList list={bread_list}></BreadList>

          {/* Component */}
          <div className="box-heading">
            <div className="inner-heading">
              <p className="catch">Online challenge</p>
              <div className="heading">
                <div className="badge__onlinechallenge pc_only">Online challenge</div>
                <h1>飛騨の手仕事</h1>
                <div className="caption">
                  <div className="layout-button">
                    <Link href='https://www.hida-collection.shop/view/category/hida-crafts' legacyBehavior><a className="go_to_online target_blank" target="_blank">オンラインショップでみる</a></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="visual-heading">
              <Image
                src="/images/handcrafts-of-hida/001.jpg"
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
              <p> 木工、陶芸、吹きガラス、張り子など、飛騨のクラフト作家をご紹介。</p>
              <p> 「HIDA・COLLECTION」という名前には、飛騨のいいもの・こだわりのものを全国の人に知っていただきたいという思いがあります。</p>
              <p> 飛騨の匠の歴史から続く工芸・民芸の文化と、飛騨の豊かな自然の中で丁寧につくりあげられた作品には、それぞれの作家さんの唯一無二の個性と温かみがあふれています。</p>
              <p> 思わず手にとってしまうほど心惹かれるクラフト作品と出会えるところ。</p>
              <p> ヒダコレがそのような場所と機会になれるように、今まで通りに「飛騨のいいもの・こだわり」をご紹介していきたいと思います。</p>
            </div>
          </section>

          <section className="box-products">
  
            <p className="heading-products">飛騨の作家</p>

            <nav className="nav-craftman">
              {postLists.map(post =>
                <Scroll to={post.slug} smooth={true} duration={600} offset={-105}>
                  <p className="profession" key={post.id}>{post.profession}</p>
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
            title="温かみのある飛騨のクラフトも<br />ネットでお選びいただけます。"
            caption="ヒダコレ オンラインショップでは飛騨のクラフト作品も多く取り揃えております。ぜひオンラインショップで選んでみてください。"
            ec_url="https://www.hida-collection.shop/view/category/hida-crafts"
          />


        </div>
      </>
    );
};

export default Home;