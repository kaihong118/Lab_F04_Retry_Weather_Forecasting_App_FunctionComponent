import ForecastTableRow from "../ForecastTableRow/ForecastTableRow.tsx";
import Table from 'react-bootstrap/Table';
import {ForecastWeatherData, List} from "../../../data/ForecastWeatherData.ts";
import ForecastTableRowLoading from "../ForecastTableRowLoading/ForecastTableRowLoading.tsx";

type Props = {
    data: ForecastWeatherData | undefined
}

export default function ForecastTable (props: Props) {
    const setTableRow = () => {
        if(props.data) {
            return props.data.list.map((value:List) => (
                <ForecastTableRow data={value} key={value.dt}/>
            ))
        }
        else {
            return Array.from({length:20}).map((_, index:number) => (
                <ForecastTableRowLoading key={index}/>
            ))
        }
    }

    return (
        <>
            <>
                <Table striped bordered hover variant="dark" className="align-middle">
                    <thead>
                    <tr className="align-middle">
                        <th>Date</th>
                        <th>Time</th>
                        <th>Temperature (Min/Max)</th>
                        <th>Humidity (%)</th>
                        <th>Weather</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        setTableRow()
                    }
                    </tbody>
                </Table>
            </>
        </>
    )
}