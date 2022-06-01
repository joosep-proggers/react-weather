import { useState } from "react";

const CityForm = (props) => {

    const [changeCity, setChangeCity] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()
        props.onChangeCity(changeCity)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(event) => setChangeCity(event.target.value)}></input>
                <button type="submit">Muuda linna</button>
            </form>
        </div>
    )
}

export default CityForm;