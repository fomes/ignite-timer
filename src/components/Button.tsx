import React from "react";
import { ButtonContainer, ButtonVariant } from "../styles/Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export default function Button({ variant = "secondary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Button</ButtonContainer>;
}
