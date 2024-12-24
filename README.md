
# React Native Calculator App

A modern, user-friendly calculator application built with React Native and Expo. This app features a clean interface with basic arithmetic operations and a responsive design.

![Calculator App Screenshot](calculator.jpeg)


## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clear function
- Error handling
- Responsive design
- Professional UI with distinct operator and equals button styling
- Safe area compatibility for modern devices

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Installation

1. Clone the repository:
```bash 
git clone <your-repository-url>
cd CalculatorApp
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm run start
```

To check for potential issues in your project:
```bash
npx expo-doctor
```

## Building the App

To build the Android APK (preview version):
```bash
eas build -p android --profile preview
```

Note: Make sure you have configured your `eas.json` file properly before building.

## Project Structure

```
CalculatorApp/
├── app/
│   └── index.jsx        # Main application component
├── assets/              # Contains app assets
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## Technologies Used

- React Native
- Expo
- React Hooks (useState)
- React Native StyleSheet

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

[Chinna Siva Krishna Thota]

## Acknowledgments

- Thanks to Expo for providing an excellent development platform
- React Native community for the comprehensive documentation

## Support

For support, email [chinnasivakrishna2003@gmail.com] or open an issue in the repository.
```

This README provides:
- Clear installation and setup instructions
- Development and building commands
- Project structure
- Technology stack
- Contributing guidelines
- License information
- Author credits

You should customize it by:
1. Adding your repository URL
2. Including screenshots of your app
3. Adding your contact information
4. Modifying the license section according to your preferences
5. Adding any specific configuration steps if needed
6. Including any additional features or functionalities specific to your implementation

Remember to create a `.gitignore` file to exclude `node_modules/` and other build artifacts from version control.
