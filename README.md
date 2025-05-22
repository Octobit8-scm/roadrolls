# Roadrolls - Travel Booking Website

Roadrolls is a comprehensive travel booking platform that allows users to book hotels, flights, trains, and buses. It also offers tour packages to various destinations and provides weather-based travel accessory recommendations.

## Features

- **Flight Booking**: Search and book flights with real-time availability
- **Hotel Booking**: Find and book hotels with detailed information and reviews
- **Train & Bus Booking**: Book train and bus tickets for domestic travel
- **Tour Packages**: Explore curated tour packages for popular destinations
- **Travel Accessories**: Get weather-based recommendations for travel accessories
- **Responsive Design**: Mobile-friendly interface for all devices

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React DatePicker
- React Icons
- Hero Icons

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/roadrolls.git
   cd roadrolls
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:

   ```
   NEXT_PUBLIC_API_URL=your_api_url
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
roadrolls/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── flights/        # Flight booking pages
│   │   ├── hotels/         # Hotel booking pages
│   │   ├── trains/         # Train booking pages
│   │   ├── buses/          # Bus booking pages
│   │   ├── packages/       # Tour package pages
│   │   └── accessories/    # Travel accessories pages
│   ├── components/         # Reusable components
│   ├── lib/               # Utility functions and API calls
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
└── package.json          # Project dependencies and scripts
```

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the production application
- `npm start`: Start the production server
- `npm run lint`: Run ESLint to check code quality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Hero Icons](https://heroicons.com)
