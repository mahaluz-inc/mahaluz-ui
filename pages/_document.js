import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="he">
      <Head>
        <meta name="viewport" content="width=device-width,height=device-height initial-scale=1" />
      </Head>
      <body dir="rtl">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
