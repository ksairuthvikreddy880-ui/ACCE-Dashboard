# Premium Association Mobile App

A premium, modern mobile application for professional associations built with React Native and Expo.

## Features

- **Premium Mobile Design**: Native iOS/Android experience with smooth animations
- **Welcome Screen**: Full-screen landing with "Explore App" button
- **Home Dashboard**: Quick access to all features with statistics
- **Events Management**: Browse and register for upcoming events
- **Calendar Integration**: View important dates and highlights
- **Board Directory**: Meet leadership team with contact information
- **Contact System**: Multiple contact methods and message form
- **Smooth Navigation**: Native stack navigation with custom transitions

## Design System

### Visual Identity
- **Premium Colors**: Sophisticated neutral palette with accent colors
- **Typography**: Inter for headings, Source Sans Pro for body text
- **Animations**: Smooth React Native Reanimated transitions
- **Mobile-First**: Optimized for touch interactions and mobile UX

### Screens
1. **Welcome Screen**: Full-screen introduction with explore button
2. **Home Screen**: Dashboard with quick access menu and statistics
3. **Events Screen**: List of upcoming events with registration
4. **Calendar Screen**: Monthly highlights and full calendar access
5. **Board Screen**: Leadership team directory with contact info
6. **Contact Screen**: Multiple contact methods and message form

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on device/simulator:
```bash
# iOS
npm run ios

# Android
npm run android
```

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation 6
- **Animations**: React Native Reanimated
- **Icons**: Expo Vector Icons
- **Gradients**: Expo Linear Gradient
- **Language**: TypeScript

## Project Structure

```
├── src/
│   ├── screens/           # App screens
│   ├── components/        # Reusable components
│   └── constants/         # Colors, fonts, etc.
├── assets/               # Images, fonts
└── App.tsx              # Main app component
```

## Mobile Features

- **Native Navigation**: Stack-based navigation with gestures
- **Touch Interactions**: Optimized button sizes and touch targets
- **Responsive Design**: Adapts to different screen sizes
- **Performance**: Optimized animations and smooth scrolling
- **Accessibility**: Screen reader support and proper contrast

## Customization

- **Colors**: Update `src/constants/Colors.ts`
- **Fonts**: Modify `src/constants/Fonts.ts` and add font files
- **Content**: Update screen components with your data
- **Animations**: Adjust timing in `AnimatedView` component

This is a true mobile app experience, not a web app - built specifically for iOS and Android with native performance and interactions.