# Coin Insight

**Coin Insight** is a robust, user-friendly cryptocurrency tracker app built with **React.js**. It allows users to monitor real-time cryptocurrency data, including prices, market caps, and more, using the **CoinGecko API**. The app offers a comprehensive view of various cryptocurrencies, making it an ideal tool for both casual users and serious investors.

## Live Website
[Visit Coin Insight](#) <!-- Add your live website URL here -->

## Table of Contents
- [Features](#features)
- [Preview](#preview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)


## Features
- **Home Page**: Displays a table of cryptocurrencies with images, names, prices, 24-hour changes, and market cap.
- **Currency Selector**: Toggle between USD and INR for displaying data.
- **Pagenation**: Browse through an extensive list of cryptocurrencies using Next and Back.
- **Detailed View**: Click on a cryptocurrency to see its image, description, current price, and a dashboard with market cap, all-time high/low, total volume, and price changes over different periods.
- **Interactive Charts**: Show price, market cap, and volume data over 24 hours, 30 days, and one year.
- **Reusable Components**: Built using the presenter-container pattern for maintainable code.
- **Custom Hooks**: Implemented for reusable logic.
- **State Management**: Managed by Zustand.
- **API Caching**: Handled using React Query.
- **Responsive Design**: Powered by DaisyUI.
- **Search Box with Suggestions**: Implemented search functionality.


## Preview
- **Home Page**: Displays a list of cryptocurrencies with data like price, market cap, and more.
- 
  ![2024-10-19-12-28-30](https://github.com/user-attachments/assets/211df2f5-f554-4b8e-bd98-e731d47b97ba)

- **Crypto Table**: Shows the tabel of the all the trending cryptocurrencies .
- 
  ![2024-10-19-12-29-10](https://github.com/user-attachments/assets/f929628a-9406-4930-a77f-4e0398f43cb4)

- **Crypto Coin Search**: Allows users to search for specific cryptocurrencies.
- 
  ![2024-10-19-12-31-14](https://github.com/user-attachments/assets/3f3b841b-2160-465f-953e-fb1d4a2ba40d)

- **Crypto Detail Page**: Shows detailed information for a selected cryptocurrency, including interactive charts.
- 
  ![2024-10-19-12-30-29](https://github.com/user-attachments/assets/a0099d3a-2857-42af-a795-e29478f951cb)



## Tech Stack
- **Frontend**: React.js, DaisyUI, Zustand, Chart.js 2
- **API**: CoinGecko Free API
- **State Management**: Zustand
- **API Caching**: React Query
- **Patterns**: Presenter-Container, Custom Hooks
- **Performance**: Suspense, Error Boundaries, Lazy Loading

## Getting Started
To run the project locally, follow these steps:

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ManikMaity/Crypto-Project---CoinGecko.git
   cd Crypto-Project---CoinGecko


2. **Install the dependencies:**:
   ```bash
   npm install



3. **Start the development server:**:
   ```bash
   npm run dev
   
