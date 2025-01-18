import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useHook() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
      axios
        .get("/api/employees")
        .then((response) => setEmployees(response.data))
        .catch((error) => console.error(error));
    },[]);
  
    console.log(employees);

    return {employees}
}

export default useHook
