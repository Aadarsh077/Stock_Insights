# Stock Insights

## Overview
Stock Insights is a web application developed with React that provides users with real-time insights into cryptocurrency trends. The app leverages interactive charts and data visualization tools to display up-to-date market information, making it easy for users to track and compare the performance of different cryptocurrencies.

## Features
- **Real-time Data**: Displays up-to-date prices and trends for various cryptocurrencies.
- **Interactive Charts**: Users can explore detailed charts to see historical data and trends.
- **User-Friendly Interface**: Simplified and clean UI for easy navigation.
- **Data Visualization**: Visual representation of market data to help users understand trends.
- **Customizable Filters**: Filter cryptocurrencies by market cap, volume, or specific time periods.

## Tech Stack
- **Frontend**: React, JavaScript, HTML, CSS, CharkraUI
- **Data Visualization**: Chart.js
- **API**: CoinGecko

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Aadarsh077/Stock_Insights.git
    cd Stock_Insights
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file** in the project root and add your API key (if required):
    ```makefile
    REACT_APP_API_KEY=your_api_key_here
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

5. **Build for production**:
    ```bash
    npm run build
    ```

## Usage
After setting up the project, the app should be accessible at `http://localhost:3000`. The homepage displays an overview of the crypto stock market. You can navigate through the dashboard to explore different cryptocurrencies, view historical data, and apply filters to customize your insights.

## Screenshots

### Home Page:
![Home](Project%20Images/home.png)

### Exchanges:
![Exchanges](Project%20Images/exchanges.png)

### Cards:
![Coins Overview](Project%20Images/coins.png)

### Charts:
![Chart](Project%20Images/chart.png)

### Comparison:
![Comparison](Project%20Images/compare.png)
![Footer Section](Project%20Images/foot.png)


## Contributing
Contributions are welcome! Follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Commit your changes**:
    ```bash
    git commit -m "Add your message here"
    ```
4. **Push to the branch**:
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Open a Pull Request**.
