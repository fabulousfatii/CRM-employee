import React from 'react'

function OrganizationSidebar() {
    return (
        <nav class="mt-10 ">
                <a class=" hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white  duration-200  text-white hover:text-blue-600 " href="#">
                    <span class="mx-4 text-lg font-normal">
                        performance
                    </span>
      </a>
                <a class=" hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white duration-200  text-white hover:text-blue-600 " href="#">
                    <span class="mx-4 text-lg font-normal">
                       Departemnts
                    </span>
                    
                </a>
                <a class=" hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white duration-200  text-gray-600 dark:text-gray-100  " href="#">
                    <span class="mx-4 text-lg font-normal">
                        Employee
                    </span>
                    
                </a>
            </nav>
    )
}

export default OrganizationSidebar
