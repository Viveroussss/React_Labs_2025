import { FC } from 'react';
import { Header, Footer, LoginForm } from '../../components';

export const LoginPage: FC = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}; 