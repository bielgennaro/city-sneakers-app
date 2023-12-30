import { useMemo } from "react";
import { TextTypes } from "./textTypes";
import { ContainerText } from "./text.style";
import { TextProps as TextPropsNative } from "react-native/types";

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  margin?: string;
}


// TODO: Realize how to return this correctly
export const Text = ({ margin, color, type, ...props }: TextProps) => {
  const fontSize = useMemo(() => {
    switch (type) {
      case TextTypes.BUTTON_BOLD:
      case TextTypes.BUTTON_LIGHT:
      case TextTypes.BUTTON_REGULAR:
        return '18px'
      case TextTypes.TITLE_BOLD:
      case TextTypes.TITLE_LIGHT:
      case TextTypes.TITLE_REGULAR:
        return '24px';
      case TextTypes.SUBTITLE_BOLD:
      case TextTypes.SUBTITLE_LIGHT:
      case TextTypes.SUBTITLE_REGULAR:
        return '20px';
      case TextTypes.PARAGRAPH_BOLD:
      case TextTypes.PARAGRAPH_LIGHT:
      case TextTypes.PARAGRAPH_REGULAR:
        return '10px';
      case TextTypes.PARAGRAPH_SMALL_BOLD:
      case TextTypes.PARAGRAPH_SMALL_LIGHT:
      case TextTypes.PARAGRAPH_SMALL_REGULAR:
      default:
        return '14px';
    }
  }, [type]);

 const fontFamily = useMemo(() => {
    switch (type) {
      case TextTypes.TITLE_BOLD:
      case TextTypes.BUTTON_BOLD:
      case TextTypes.SUBTITLE_BOLD:
      case TextTypes.PARAGRAPH_BOLD:
      case TextTypes.PARAGRAPH_SMALL_BOLD:
        return 'Nunito-Bold';
      case TextTypes.TITLE_LIGHT:
      case TextTypes.BUTTON_LIGHT:
      case TextTypes.SUBTITLE_LIGHT:
      case TextTypes.PARAGRAPH_LIGHT:
      case TextTypes.PARAGRAPH_SMALL_LIGHT:
        return 'Nunito-Light';
      case TextTypes.TITLE_REGULAR:
      case TextTypes.BUTTON_REGULAR:
      case TextTypes.SUBTITLE_REGULAR:
      case TextTypes.PARAGRAPH_REGULAR:
      case TextTypes.PARAGRAPH_SMALL_REGULAR:
        return 'Nunito-Regular';
      default:
        return 'Nunito-Regular';
    }
  }, [type]);
};