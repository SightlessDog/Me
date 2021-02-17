import styled from 'styled-components';
import { defaultTheme, primaryFont, typeScale } from '../utils';
import { animated } from 'react-spring';

const Button = styled(animated.button)`
  -moz-transition: all 0.4s ease-in;
  -o-transition: all 0.4s ease-in;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
  padding: 12px 24px;
  font-size: ${typeScale.paragraphText};
  border-radius: 6px;
  width: 150px;
  cursor: pointer;
  font-family: ${primaryFont};
  transition: background-color 0.2 linear, color 0.2 linear;

  &:hover {
    background-color: ${defaultTheme.primaryButtonColorOnHover};
    color: ${defaultTheme.textColorInverted};
  }
  &:active {
    background-color: ${defaultTheme.primaryButtonColorOnActive};
    color: ${defaultTheme.textColorInverted};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryButtonColor};
  color: ${defaultTheme.textColorInverted};
  border: none;
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${defaultTheme.primaryButtonColorOnActive};
  color: ${defaultTheme.primaryButtonColorOnActive};
`;
