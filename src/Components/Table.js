import React from 'react'

export default function Table(props) {
    return (
        <tr style={{ textAlign: "center" }} >
            <td>
                <img src={props.picture} alt={props.firstname} />
            </td>
            <td>
                {props.firstname} {props.lastname}

            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.phonenumber}
            </td>
            <td>
                {props.dob}
            </td>

        </tr>
    )
}