import axios from "axios";
import {ForecastWeatherData} from "../data/ForecastWeatherData.ts";

export const getForecastWeatherData = async () => {
    const latitude = "22.3370495"
    const longitude = "114.1420691"
    const apiKey = "0983260309cd564b801ed6ed4e535938";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`

    try {
        const response = await axios.get<ForecastWeatherData>(apiUrl)
        return response.data;
    }
    catch(error) {
        console.log(error);
    }
}