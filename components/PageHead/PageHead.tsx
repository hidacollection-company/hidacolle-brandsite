import Head from 'next/head'

const PageHead = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight
}) => {

  const defaultTitle = 'ヒダコレ家具 - 丸太から一枚板とカスタムオーダー家具'
  const defaultDescription = 'demo一枚板・無垢テーブル・木の学習机の販売は、家具工房 | 飛騨コレクション くらしの制作所。一枚板はダイニングテーブルや学習机、山桜 トチ ケヤキ ウォルナット チェリーなど。 国産天然木 オイル仕上げで制作する一枚板 飛騨の家具は安心。オーダーメイド 一枚板、記念品用の木の小物も承ります。'

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? pageDescription : defaultDescription
  const url = pagePath ? pagePath : "https://www.hidacolle.com/"
  const imgUrl = pageImg ? pageImg : "https://www.hidacolle.com/ogp.jpg"
  const imgWidth = pageImgWidth ? pageImgWidth : 1280
  const imgHeight = pageImgHeight ? pageImgHeight : 640

  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet" />
      <link rel="canonical" href={url} />
    </Head>
  )
}

export default PageHead