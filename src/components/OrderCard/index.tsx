import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Image,
  Name,
  Description,
  StatusContainer,
  StatusLabel,
  StatusTypesProps,
} from './styles';

type Props = TouchableOpacityProps & {
  index: number;
}

export function OrderCard({ index, ...rest }: Props) {
  return (
    <Container index={index} {...rest}>
      <Image source={{ uri: 'https://firebasestorage.googleapis.com:443/v0/b/gopizza-7affe.appspot.com/o/pizzas%2F1647353472138.png?alt=media&token=deefa5fa-e1a6-4c3b-b795-09a295234732'}} />

      <Name>4 Queijos</Name>

      <Description>
        Mesa 5 ⚬ Qnt: 1
      </Description>

      <StatusContainer status='Entregue'>
        <StatusLabel status='Entregue'>Entregue</StatusLabel>
      </StatusContainer>
    </Container>
  )
}
