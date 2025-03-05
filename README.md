# rccomponent-color-picker

`rccomponent-color-picker` is a simple and customizable color picker library for **React** projects. This component allows users to visually select a color and get its value to use it in different parts of your application.

## Features

- **Interactive color picker**.
- **Support for copying the selected color to the clipboard**.
- **Reusable component** to integrate easily into any React project.
- **Customization** through props to adjust design and behavior.

## Installation

You can install `rccomponent-color-picker` via npm:

```bash
npm install rccomponent-color-picker
```

## Usage

```bash
import ColorPicker from 'rccomponent-color-picker';
```

## Basic Example

```bash
import React, { useState } from 'react';
import ColorPicker from 'rccomponent-color-picker';
import 'rccomponent-color-picker/dist/index.css'; // Make sure to import the styles

const App = () => {
  const [color, setColor] = useState('#ff0000');

  const handleChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <div>
      <h1>Select a color:</h1>
      <ColorPicker color={color} onChange={handleChange} />
      <div>Selected color: {color}</div>
    </div>
  );
};

export default App;
```

## Props

| Prop       | Type       | Description                                                                               |
| ---------- | ---------- | ----------------------------------------------------------------------------------------- |
| `color`    | `string`   | The initial color of the picker (default is `#ff0000`).                                   |
| `onChange` | `function` | Function that is called when the color changes. It receives the new color as an argument. |
| `disabled` | `boolean`  | If `true`, disables the color picker. (Default: `false`)                                  |
| `showCopy` | `boolean`  | If `true`, shows the button to copy the color to the clipboard. (Default: `true`)         |

## Development

If you want to contribute or make modifications to the project, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/your_username/rccomponent-color-picker.git
cd rccomponent-color-picker
```

### Install dependecies:

```bash
npm install
```

### Run the project locally:

```bash
npm run dev
```
