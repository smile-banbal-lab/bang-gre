import React from 'react';
import './CommonTable.css';

const CommonTable = props => {
    const { headersName, children } = props;

    return (
        <table className="common-table">
<<<<<<< HEAD
        <thead>
            <tr>
            {
                headersName.map((item, index) => {
                return (
                    <td className="common-table-header-column" key={index}>{ item }</td>
                )
                })
            }
            </tr>
        </thead>
        <tbody>
            {
            children
            }
        </tbody>
=======
            <thead>
                <tr>
                    {
                        headersName.map((item, index) => {
                            return (
                                <th className="common-table-header-column" key={index}>{ item }</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                children
                }
            </tbody>
>>>>>>> bang_gre/master
        </table>
    )
}

export default CommonTable;