
import { TextProps as CoreTextProps, TextStyle } from "react-native";
//Exclude font family since always will use Montserratex
type OmitFontFields<T> = Omit<T, "fontFamily" | "fontStyle">;

// Will remove fontFaimly and fontStyle from TextStyle
export type StrictTextStyle = OmitFontFields<TextStyle> & { fontSize: number };

// if provided value is number will set as fontSize, it is font style, will merge
export type FontVariantValue = number | StrictTextStyle;


export type FontVariant = {
    [key: string]: FontVariantValue;
};

export type fontWeightType = "Thin" | "ExtraLight" | "Light" | "Regular" | "Medium" | "SemiBold" | "Bold" | "ExtraBold" | "Black" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type FontStyle = OmitFontFields<TextStyle> & { fontWeight?: fontWeightType };

export interface TextProps extends CoreTextProps {
    weight?: fontWeightType,
    italic?: boolean,
    variant?: string,
    style?: FontStyle,
}
