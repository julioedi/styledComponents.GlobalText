import React,{ Component, ReactNode } from "react";
import { Text as CoreText, StyleSheet, TextStyle } from "react-native";
import { FontVariant, fontWeightType, TextProps } from "./types";

class Text extends Component<TextProps> {
    static FontName = "Montserrat"; // Custom font name
    static setFontName(name: string) {
        Text.FontName = name;
    }
    static variants: FontVariant = {
        xs:8,
        tiny: 10,
        small: 12,
        body: 14,
        medium: 16,
        large: 18,
        title: 22,
        heading: 26,
        display: 32,
    };

    static assignVariants(newVariants: FontVariant) {
        Text.variants = { ...Text.variants, ...newVariants };
    }

    /**
     * Define sizes based on font file names for example "Montserrat-400" is the registerd font 
     */
    static weights: { [key in fontWeightType]: number } = {
        "Thin": 100,
        "ExtraLight": 200,
        "Light": 300,
        "Regular": 400,
        "Medium": 500,
        "SemiBold": 600,
        "Bold": 700,
        "ExtraBold": 800,
        "Black": 900,
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900
    };

    static getSizeParam(weight?: TextProps['weight']): number {
        return Text.weights[weight ?? "Regular"] ?? Text.weights["Regular"];
    }



    getVariant = (): TextStyle => {
        const { variant } = this.props;
        if (!variant) {
            return {}
        }
        const variantValue = Text.variants[variant];
        if (variantValue === undefined) return {};

        return typeof variantValue === "number"
            ? { fontSize: variantValue }
            : variantValue;

    }

    static getFontFamily(weight: TextProps['weight'], italic?: boolean): string {
        const size = Text.getSizeParam(weight);
        return `${Text.FontName}-${size}${italic ? "-italic" : ""}`;
    };


    getStyle = (): TextStyle => {
        const { weight, italic, style } = this.props;
        const variantStyle = this.getVariant();

        const sanitizedStyle = { ...StyleSheet.flatten(style) };

        // inherit default variant styles and merge with custom styles if exists
        const PreStyle: TextStyle = { ...variantStyle, ...sanitizedStyle };

        let size = Text.getSizeParam(weight); // Default size is handled here

        // If fontWeight exists in the passed style, use it, else use the 'weight' prop
        if (PreStyle.fontWeight) {
            size = Text.getSizeParam(PreStyle.fontWeight as TextProps['weight'] || 400);
        }
        const defaultFont: TextStyle = {
            fontWeight: undefined,  // let it resolve to the appropriate weight based on size
            fontStyle: "normal", // 'Set it normal since font.ttf is loading for each kind of font style
            fontFamily: Text.getFontFamily(weight, italic) // Concatenate Montserrat for italic font
        };


        return {
            ...PreStyle,
            ...defaultFont
        };
    }

    render(): ReactNode {
        const { children, weight, italic, style, variant, ...props } = this.props;
        const memoizedStyle = this.getStyle(); // Removed useMemo

        return (
            <CoreText style={memoizedStyle} {...props}>
                {children}
            </CoreText>
        );
    }
}

export default Text;
