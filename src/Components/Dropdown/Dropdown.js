import React from 'react'

const Dropdown = props => {

    const handleOnChange = (value) => {
        props.change(value);
    }
    return (
        <div className="mx-2">
            <label>Sort By : </label>
            <select onChange={(e) => handleOnChange(e.target.value)}>
                {
                    props.options.map((option, i) => (
                        <option key={i} value={option}
                            selected={option === "Show All" ? `selected` : null}
                        >{option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}


export default Dropdown;