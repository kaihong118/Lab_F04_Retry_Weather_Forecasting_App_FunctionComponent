import {List} from "../../../data/ForecastWeatherData.ts";
import * as moment from "moment/moment";

type Props = {
    data: List
}

export default function ForecastTableRow (props: Props) {
    return (
        <>
            <tr>
                <td>{moment.unix(props.data.dt).format("DD/MM/YYYY")}</td>
                <td>{moment.unix(props.data.dt).format("HH:mm:ss")}</td>
                <td>{props.data.main.temp_min} / {props.data.main.temp_max}</td>
                <td>{props.data.main.humidity}%</td>
                <td><img
                    src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
                    alt={"Refresh"}
                    style={{backgroundColor: "transparent"}}
                /></td>
            </tr>
        </>
    )
}
