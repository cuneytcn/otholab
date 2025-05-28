import * as React from 'react';
import Footer from '~/components/shared/footer';
import Header from '../../components/shared/header';
import StoreProvider from '../../providers/store-provider';

type Props = {
  children: React.ReactNode;
};

export default function RoutesLayout({ children }: Props) {
  return (
    <StoreProvider>
      <Header />
      {children}
      <Footer />
    </StoreProvider>
  );
}
