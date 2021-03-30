import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json"/>
          <link rel="apple-touch-icon" href="/vercel.png"/>
          <link rel="theme_color" content="#fff" />

          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
      
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-icon-180.png"/>
      
        <meta name="apple-mobile-web-app-capable" content="yes"/>

        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-512-512.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-512-512.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-192-192.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-192-192.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-144-144.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-144-144.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-96-96.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-96-96.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-72-72.png" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-72-72.png" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-48-48.png" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-48-48.png" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-48-48.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-48-48.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-48-48.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-48-48.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-48-48.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-48-48.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-512-512.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-512-512.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-512-512.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-512-512.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-512-512.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-512-512.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-512-512.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="%PUBLIC_URL%/android-launchericon-512-512.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      
        

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument