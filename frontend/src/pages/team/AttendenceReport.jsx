import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AttendenceReport() {
    const [reportData, setReportData] = useState({})


    const [limit, setLimit] = useState(5)
    const [skip, setSkip] = useState(0)
    const [filterDate, setFilterDate] = useState(null)

    const getReport = async () => {
        const query = new URLSearchParams({limit, skip})
        if (filterDate) {
            query.append("date", filterDate)
        }
        try {
            const response = await axios.get(`/api/attendence/report?${query.toString()}`)
            console.log(response)
            setReportData(response.data.groupdata || {})

            if (skip === 0) {
               setReportData(response.data.groupdata)
            }
            else{
                setReportData({...reportData, ...response.data.groupdata})
          }
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getReport()
    }, [limit, skip, filterDate])

    const handleloadmore= ()=>{
        setSkip((prevSkip)=>prevSkip+limit)
    }

    return (
        <div className="container w-[85vw] bg-gray-100 h-full flex-col ml-52 justify-end text-black items-center pb-10 ">
            attendence report
            {Object.entries(reportData).length > 0 && Object.entries(reportData).map(([date, record]) => (



<div className="p-6 bg-gray-100 rounded-lg shadow-md">
<h1 className="text-2xl font-bold text-gray-800 mb-4">{new Date(date).toLocaleDateString('en-GB')}</h1>
<table className="w-full border-collapse bg-white rounded-lg shadow-md">
    <thead className="bg-gray-200">
        <tr>
            <th className="py-2 px-4 text-left text-gray-600 font-medium">Employee Name</th>
            <th className="py-2 px-4 text-left text-gray-600 font-medium">Employee ID</th>
            <th className="py-2 px-4 text-left text-gray-600 font-medium">Status</th>
        </tr>
    </thead>
    <tbody>
        {record?.map((employee, index) => (
            <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <td className="py-2 px-4 text-gray-700">{employee?.name}</td>
                <td className="py-2 px-4 text-gray-700">{employee?.employeeId}</td>
                <td className="py-2 px-4 text-gray-700">{employee?.status}</td>
            </tr>
        ))}
        <button onClick={handleloadmore} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
            Load More 
        </button>
    </tbody>
</table>
</div>

            ))}
        </div>
    )
}

export default AttendenceReport
