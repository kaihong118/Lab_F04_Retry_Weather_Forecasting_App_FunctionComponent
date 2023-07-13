import {Placeholder} from "react-bootstrap";

export default function ForecastTableRowLoading() {
    return (
        <>
            <tr>
                {
                    Array.from({length: 5}).map((value, index:number) => (
                        <td key={index}>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={12}/>
                            </Placeholder>
                        </td>
                    ))
                }
            </tr>
        </>
    )
}