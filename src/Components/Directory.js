import React, { Component } from 'react'
import employees from "../db.json"
import Table from "./Table"

export default class Directory extends Component {
    state = {
        employees: employees
    }

    search = event => {
        let search = event.target.value
        console.log(search)
        let employeefirst = employees.filter(el => el.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        this.setState({employees: employeefirst})
    }

    sortfirstname = () => {
        this.setState({  
            employees: employees.sort((a, b) =>
                (a.name.first > b.name.first ? 1 : -1)
            )
        })
    }

    sortlastname = () => {
        this.setState({  
            employees: employees.sort((a, b) =>
                (a.name.last > b.name.last ? 1 : -1)
            )
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div className="searchIcon">Search: 
                    <input type="search" name="search" placeholder="search employee" onChange={event => this.search(event)} />
                    <button onClick= {this.sortfirstname}>Sort By First Name</button>
                    <button onClick = {this.sortlastname}>Sort By Last Name</button>

                    </div>
                </div>

                <table style={{
                    tableLayout:"fixed", width: "100%"
                }}>
                    <thead>
                        <tr>
                            <th>
                                Picture
                            </th>
                            <th>
                                Name
                                                            
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone #
                            </th>
                            <th>
                                DOB
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => {
                            return (
                                <Table
                                    key={employee.id.value}
                                    picture={employee.picture.thumbnail}
                                    firstname={employee.name.first}
                                    lastname={employee.name.last}
                                    email={employee.email}
                                    phonenumber={employee.phone}
                                    dob={employee.dob.date}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}