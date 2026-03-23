import { NextPage } from 'next';
import { ReactElement } from 'react'; // 追加
import Link from 'next/link';
import Image from 'next/image';

import PageHead from 'components/PageHead/PageHead'
import { CtaBox } from 'components/CtaBox/CtaBox'
import { IchimaiitaList } from 'components/Ichimaiita/IchimaiitaList'
import { Links } from 'components/Ichimaiita/Links'
import { BreadList } from 'components/BreadList/BreadList'

import {Link as Scroll} from "react-scroll"

type Props = {
  ichimaiita_data: any[];
}

const Home: NextPage<Props> = ({ichimaiita_data}) => {

    const bread_list : { [key: string]: string }[] = [
      {
        name: "",
        url: ""
      }
    ];

    return (
      <>
        <PageHead
          pageTitle = ""
          pageDescription = ""
          pageRobots = ""
          pagePath = "https://www.hidacolle.com/links/line"
          pageImg = ""
          pageImgWidth = ""
          pageImgHeight = ""
        />

        <div className="contents-body body-maintenance_project">
          <p>TEST</p>
        </div>
      </>
    );
};

Home.getLayout = (page: ReactElement) => page;

export default Home;