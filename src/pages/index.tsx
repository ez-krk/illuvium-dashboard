import Table from 'components/table/table.component';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Illuvium Dashboard | XBorg Labs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          property="og:title"
          content="Illuvium Dashboard | XBorg Labs"
        />
        <meta property="og:site_name" content="illuvium-dashboard" />
        <meta property="og:url" content="https://illuvium-dashboard.vercel.app/" />
        <meta
          property="og:description"
          content="Illuvium Dashboard | XBorg Labs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://uploads-ssl.webflow.com/62652f3f56a98bb931e06154/62fe19c222acf110ba8e7a5c_62f3d782c15eff3c632ee68e_62e998c32a44d451d91810da_Illuvium_wallpaper_2.jpeg"
        />
      </Head>
      <Table />
    </>
  );
}
