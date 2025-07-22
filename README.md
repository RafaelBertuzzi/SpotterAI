# SpotterAI ✈️

A React Native flight search app built with Expo, featuring a clean architecture and modern UI.

## Features

- 🔍 Flight search with flexible dates
- 🏢 Airport search with autocomplete
- 🔐 User authentication (login/signup)
- 📱 Cross-platform (iOS & Android)

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the app
   ```bash
   npx expo start
   ```

## Project Structure

```
src/
├── api/                    # API configuration and setup
├── components/             # Reusable UI components
│   ├── AirportSearchInput/ # Airport search with autocomplete
│   ├── Box/               # Layout components (Row, Column, Center)
│   ├── DatePicker/        # Date selection component
│   ├── FlightSearch/      # Flight search related components
│   ├── Input/             # Text input components
│   └── Screen/            # Screen wrapper component
├── domain/                # Business logic
│   ├── Airport/           # Airport search domain
│   ├── Auth/              # Authentication domain
│   ├── Flights/           # Flight search domain
│   └── User/              # User management domain
├── hooks/                 # Custom React hooks
├── routes/                # Navigation setup
├── screens/               # App screens
│   ├── app/               # Main app screens (flights, account)
│   └── auth/              # Authentication screens (login, signup)
├── services/              # External services and storage
├── theme/                 # Design system (colors, typography)
```

### Domain Layer

Each domain follows Clean Architecture principles:
- **Types**: TypeScript interfaces and types
- **API**: External API communication
- **Adapter**: Data transformation between API and app
- **Service**: Business logic and domain rules
- **Use Cases**: Specific application actions
- **Hooks**: React integration for domain logic

### Key Components

- **FlightSearch**: Complete flight search flow with date and airport selection
- **AirportSearchInput**: Autocomplete search for airports
- **Navigation**: Stack and tab navigation with authentication flow
- **Storage**: Secure credential storage and app state management

## Architecture

The app uses a domain-driven design with clean architecture principles:
- Separation of concerns between UI, business logic, and data
- Dependency inversion with adapters
- Reusable components and custom hooks
- Type-safe development with TypeScript

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **React Navigation** for routing
- **AsyncStorage** for local data persistence
- **Zustand** for state management
