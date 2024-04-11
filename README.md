# Weathro

## To run the Weathro application locally on your machine, follow these steps:

1. **Download the Application:**
   - Visit the GitHub repository for Weathro.
   - Click on the top green-colored "Code" button and select "Download ZIP".
   - Once downloaded, extract the ZIP file to your desired location.

2. **Open in an IDE:**
   - Open your preferred Integrated Development Environment (IDE), such as Visual Studio Code, Atom, or Sublime Text.
   - Navigate to the extracted folder containing the Weathro application.

3. **Install Dependencies:**
   - Open a terminal or command prompt within your IDE.
   - Navigate to the project directory.
   - Run the command `npm install` to install the necessary dependencies.

4. **Run the Application:**
   - After installing dependencies, in the same terminal, type `node index.js` and press Enter.
   - This command starts the server, and you should see a message indicating that the server is running.

5. **View the Application:**
   - Open any web browser (Chrome, Firefox, Safari, etc.).
   - In the address bar, type `localhost:5000` and press Enter.
   - This will open the Weathro application, allowing you to enter a location and view live weather information.

Alternatively, you can access the already hosted version of Weathro by visiting [https://weathro.cyclic.app/](https://weathro.cyclic.app/). This version is already deployed and running, so you can explore the application without the need to set it up locally.


## Features:

- Live Weather Data: Utilizing the OpenWeatherMap API, WeatherNow fetches the latest weather information for the specified location.

- Customizable Temperature Scale: Users have the option to select their preferred temperature scale (e.g., Celsius or Fahrenheit) for displaying weather information.

- Dynamic Weather Display: WeatherNow dynamically updates the weather condition (e.g., windy, sunny, rainy) based on the fetched data.

- Visual Representation: Alongside weather information, WeatherNow provides users with visual representations of weather conditions through relevant images.

- User-Friendly Interface: The interface is designed to be intuitive and user-friendly, with a clear input field for location and options for temperature scale selection.

- Responsive Design: WeatherNow is responsive and can be accessed seamlessly across various devices and screen sizes, ensuring a consistent user experience.
