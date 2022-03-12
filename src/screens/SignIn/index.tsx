import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import brandImg from '@assets/brand.png';

import { useAuth } from '@hooks/auth';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isLogging, signOut } = useAuth();

  function handleSignIn() {
    signIn(email, password);
  }

    return (
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Content>

            <Brand source={brandImg} />

            <Title>Login</Title>

            <Input
              placeholder='E-mail'
              type='secondary'
              onChangeText={setEmail}
              autoCorrect={false}
              autoCapitalize='none'
            />

            <Input
              placeholder='Senha'
              type='secondary'
              onChangeText={setPassword}
              secureTextEntry
            />

            <ForgotPasswordButton>
              <ForgotPasswordLabel>
                Esqueci minha senha
              </ForgotPasswordLabel>
            </ForgotPasswordButton>

            <Button
              title='Entrar'
              type='secondary'
              onPress={handleSignIn}
              isLoading={isLogging}
            />
          </Content>
        </KeyboardAvoidingView>
      </Container>
    );
}
