import React from "react";
import { GlobalDisplay } from "../globalStyle/globalStyles";

interface InputProps {
  title?: string;
  errorMessage?: string;
}

export const Input = ({title, errorMessage}: InputProps) => {
  return (
    <GlobalDisplay>
      <input type="text" placeholder={title} />
      <span>{errorMessage}</span>
    </GlobalDisplay>
  )
}