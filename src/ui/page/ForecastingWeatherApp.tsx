import "./ForecastingWeatherApp.css"
import Container from 'react-bootstrap/Container';
import PageHeading from "../component/PageHeading/PageHeading.tsx";
import ForecastTable from "../component/ForecastTable/ForecastTable.tsx";
// import mockData from "./response.json"
import {useEffect, useState} from "react";
import * as moment from "moment/moment";
import {ForecastWeatherData} from "../../data/ForecastWeatherData.ts";
import * as GetWeatherDataApi from "../../api/GetWeatherDataApi.ts"
import WeatherChart from "../component/WeatherChart/WeatherChart.tsx";
import {WeatherChartData} from "../component/WeatherChart/WeatherChartData.ts";

export default function ForecastingWeatherApp () {
    const [data, setData] = useState<ForecastWeatherData | undefined>(undefined);
    const [updatedTime, setUpdatedTime] = useState<string | undefined>(undefined);
    const [chartData, setChartData] = useState<WeatherChartData[] | undefined>([])

    const pushChartData = (data: ForecastWeatherData | undefined) => {
        data?.list.map((value) => (
            chartData?.push({name: moment.unix(value.dt).format("DD/MM/YYYY HH:mm:ss")
                , temperature: value.main.temp
                , humidity: value.main.humidity} as WeatherChartData)
        ))
        return chartData;
    }

    const fetchDataFromApi = async () => {
        setData(undefined);
        setUpdatedTime(undefined);
        setChartData([])

        const responseData: ForecastWeatherData | undefined = await GetWeatherDataApi.getForecastWeatherData();

        setData(responseData);
        setUpdatedTime(moment().format("DD-M-YYYY HH:mm:ss"));
        setChartData(pushChartData(responseData))
    }

    useEffect(() => {
        fetchDataFromApi()
    },[]);

    return (
        <>
            <Container fluid>
                <PageHeading
                    updatedTime={updatedTime}
                    fetchDataFromApi={fetchDataFromApi}/>
                <WeatherChart data={chartData}/>
                <ForecastTable data={data}/>
            </Container>
        </>
    )
}