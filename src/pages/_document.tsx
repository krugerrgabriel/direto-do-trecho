import React from 'react';
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        // @ts-ignore
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="og:site_name"
            content="Direto do Trecho - O Diário do Caminhoneiro"
          />
          <meta name="author" content="Gabriel Sabara Krüger" />
          <link rel="canonical" href="https://diretodotrecho.com.br/" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="locale" content="pt_BR" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="viewport" content="width=device-width" />

          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            rel="stylesheet"
          />

          <link
            rel="icon"
            type="image/svg"
            href="/favicon-dark.svg"
            media="(prefers-color-scheme: dark)"
          />
          <link
            rel="icon"
            type="image/svg"
            href="/favicon-light.svg"
            media="(prefers-color-scheme: light)"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
