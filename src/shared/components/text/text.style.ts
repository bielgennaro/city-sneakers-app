import styled from "styled-components/native";

interface ContainerTextProps {
  color?: string;
  fontSize: string;
  margin?: string;
  fontFamily: 'Nunito-Bold' | 'Nunito-Regular' | 'Nunito-Light',
}

export const ContainerText = styled.Text<ContainerTextProps>`
${(props) => (props.color ? `color: ${props.color};` : '')}
  padding-top: 3px;
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`