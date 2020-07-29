import React, { Component } from 'react'

export default class Fields extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rowData: this.props.rowData
        }
    }
      
    render() {
        const { rowData } = this.state
        return (
            <tr key={rowData[0]}>
                {rowData.map((item, i) =>(
                    <td key={rowData[0]+"-"+i} contentEditable='true' onInput={e => console.log('Text inside td', e.currentTarget.textContent)}>{item}</td>
                ))}
            </tr>
        )
    }
}