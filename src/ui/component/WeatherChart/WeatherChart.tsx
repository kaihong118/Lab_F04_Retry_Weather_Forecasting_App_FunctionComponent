import {WeatherChartData} from "./WeatherChartData.ts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Props = {
    data: WeatherChartData[] | undefined
}

export default function WeatherChart (props: Props) {

    return (
        <>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    width={500}
                    height={300}
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

// import {WeatherChartData} from "./WeatherChartData.ts";
// import { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//
//
// type Props = {
//     data: WeatherChartData[] | undefined
// }
// export default class WeatherChart extends PureComponent<Props> {
//     render() {
//         return (
//             <>
//                 <ResponsiveContainer width="100%" height={500}>
//                     <LineChart
//                         width={500}
//                         height={300}
//                         data={this.props.data}
//                         margin={{
//                             top: 5,
//                             right: 30,
//                             left: 20,
//                             bottom: 5,
//                         }}
//                     >
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
//                         <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
//                     </LineChart>
//             </ResponsiveContainer>
//             </>
//         )
//     }
// }