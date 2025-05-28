import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export const LoginPage: FC = () => {
  return (
    <div>
      <Header cartCount={0} />
      <LoginForm />
      <Footer />
    </div>
  );
}; 