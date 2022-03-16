import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  RadioButtonProps,
  Container,
  Title,
  Radio,
  Selected
} from './styles';

type Props = TouchableOpacityProps & RadioButtonProps & {
  title: string;
};

export function RadioButton({ selected = false, title, ...rest }: Props) {
  return (
    <Container selected={selected} {...rest}>
      <Radio selected={selected}>
        { selected && <Selected /> }
      </Radio>

      <Title>{title}</Title>
    </Container>
  )
}
