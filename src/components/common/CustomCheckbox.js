import React from 'react'

const CustomCheckBox = (props) => {
    const { household, isChecked } = props;
    return (
        <label>
        <input
            type="checkbox"
            value={household.household_code}
            checked={isChecked}
            onChange={props.handleSelected}
          />
        </label>
    )
}

export default CustomCheckBox

