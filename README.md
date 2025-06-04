# 🖋️ Custom `Text` Component for React Native (Montserrat-Based)

This `Text` component wraps `react-native`'s `Text` component to enforce consistent typography using the **Montserrat** font family. It offers a flexible system for applying font sizes, weights, and styles through props and predefined variants.

## ✨ Features

- Uses **Montserrat** font family by default.
- Supports font weights (100–900) via friendly names like `"Bold"`, `"Regular"`, etc.
- Supports italic styles.
- Customizable font variants (`tiny`, `body`, `title`, etc.).
- Allows changing the base font family if needed.

---

## 📦 Installation

1. **Install Montserrat font files** in your project (e.g., through `react-native-config`, `expo-font`, or manual linking).

    Recommended font naming convention:
    ```
    Montserrat-100.ttf
    Montserrat-100-italic.ttf
    Montserrat-200.ttf
    Montserrat-200-italic.ttf
    ...
    Montserrat-900.ttf
    Montserrat-900-italic.ttf
    ```

2. **Register fonts** in your app entry:

    ```tsx
    // Example with Expo
    import * as Font from 'expo-font';
    import AppLoading from 'expo-app-loading';

    const loadFonts = () => Font.loadAsync({
      'Montserrat-400': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-400-italic': require('./assets/fonts/Montserrat-Italic.ttf'),
      'Montserrat-700': require('./assets/fonts/Montserrat-Bold.ttf'),
      // Add more as needed...
    });

    // Use in App component
    ```

---

## 🧩 Usage

```tsx
import Text from '@julioedi/montserrat-text';

export default function App() {
    return (
        <>
            <Text variant="title" weight="Bold">Title Text</Text>
            <Text variant="body">Body Text (Regular)</Text>
            <Text variant="small" italic>Small Italic Text</Text>
            <Text weight={600} style={{ color: 'blue' }}>Custom Weight</Text>
        </>
    );
}
```

---

## 🛠 Props

| Prop     | Type                              | Description |
|----------|-----------------------------------|-------------|
| `variant`| `string`                          | Uses a predefined font size like `body`, `title`, etc. |
| `weight` | `fontWeightType` (`100`–`900` or `"Bold"` etc.) | Defines the font weight. |
| `italic` | `boolean`                         | Applies italic style. |
| `style`  | `TextStyle` (without `fontFamily`) | Additional styles. |
| `children` | `ReactNode`                     | Text content. |

---

## 🎨 Predefined Font Variants

These can be referenced via the `variant` prop:

```ts
Text.variants = {
    tiny: 10,
    small: 12,
    body: 14,
    medium: 16,
    large: 18,
    title: 22,
    heading: 26,
    display: 32,
}
```

### ➕ Add Custom Variants

```tsx
Text.assignVariants({
    subtitle: 20,
    button: { fontSize: 16, letterSpacing: 1.2 },
});
```

---

## 🧬 Change Default Font Family

To use a font other than Montserrat:

```tsx
Text.setFontName("YourFontName");
```

Then make sure your font files follow this pattern:
```
YourFontName-400.ttf
YourFontName-400-italic.ttf
YourFontName-700.ttf
...
```

---

## 📝 Notes

- `fontFamily` and `fontStyle` should **not** be set manually via `style`.
- All font styles should exist in your project under the naming scheme:  
  `FontName-weight[-italic]`, e.g., `Montserrat-400-italic`.

---

## 🧪 Example with Custom Font and Variant

```tsx
Text.setFontName("CustomSans");

Text.assignVariants({
  callout: { fontSize: 17, lineHeight: 22 },
});
```

```tsx
<Text variant="callout" weight="Medium">Custom Callout Text</Text>
```

---

## 📄 License

MIT
