type Props = {
    updatedTime: string | undefined
    fetchDataFromApi: ()=> void
}

export default function PageHeading (props: Props) {
    return (
        <>
            <div className={"header-container d-flex justify-content-between"}>
                <h1>5 Day / 3 Hour Forecast</h1>
                <div className={"d-flex"}>
                    <div>
                        Last Update Time:<br/>
                        {
                            props.updatedTime
                                ? props.updatedTime
                                : "LOADING"
                        }
                    </div>
                    <img className={"header-refresh-button"}
                         src={"src/assets/refresh.png"}
                         onClick={props.fetchDataFromApi}
                         />
                </div>
            </div>
            <h2 className={"location"}>Hong Kong</h2>
        </>
    )
}