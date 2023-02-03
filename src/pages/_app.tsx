import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import 'react-tooltip/dist/react-tooltip.css'
import { FooterComponent } from '@/components/common/footer/footer';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />

        <FooterComponent />
      </MantineProvider>
    </>
  );
}