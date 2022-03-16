import React, { useState } from 'react';
import { Platform } from 'react-native';

import { PIZZA_TYPES } from '@utils/pizzaTypes';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { ButtonBack } from '@components/ButtonBack';
import { RadioButton } from '@components/RadioButton';

import {
  Container,
  Header,
  Photo,
  Sizes,
  Form,
  Title,
  Label,
  FormRow,
  InputGroup,
  Price,
  ContentScroll,
} from './styles';

export function Order() {
  const [size, setSize] = useState('');

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
      <ContentScroll>
        <Header>
          <ButtonBack
            onPress={() => {}}
            style={{ marginBottom: 108 }}
          />
        </Header>

        <Photo source={{ uri: 'https://firebasestorage.googleapis.com:443/v0/b/gopizza-7affe.appspot.com/o/pizzas%2F1647353472138.png?alt=media&token=deefa5fa-e1a6-4c3b-b795-09a295234732' }} />

        <Form>
          <Title>Margherita</Title>

          <Label>Selecione um tamanho</Label>
          <Sizes>
            {
              PIZZA_TYPES.map(item => (
                <RadioButton
                  key={item.id}
                  title={item.name}
                  selected={size === item.id}
                  onPress={() => setSize(item.id)}
                />
              ))
            }
          </Sizes>

          <FormRow>
            <InputGroup>
              <Label>Número da mesa</Label>
              <Input keyboardType='numeric' />
            </InputGroup>
            <InputGroup>
              <Label>Quantidade</Label>
              <Input keyboardType='numeric' />
            </InputGroup>
          </FormRow>

          <Price>Valor de R$ 0,00</Price>

          <Button title='Confirmar pedido' />
        </Form>
      </ContentScroll>
    </Container>
  )
}
