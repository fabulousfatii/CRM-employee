import { Calendar, Clock, User } from 'lucide-react';

const TaskProgress = ({tasks}) => {
    console.log(tasks)
  return (
    <div className="max-w-5xl mx-auto p-6 mt-5 text-black">
                    <h1 className="text-2xl font-bold mb-2 text-indigo-900 ">Tasks progress</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-blue-100">
                        <div className="p-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-5 w-5 text-blue-600" />
                            <span className="font-medium">Total Leaves</span>
                          </div>
                          <p className="text-2xl font-bold mt-2">{tasks.length}</p>
                        </div>
                      </div>
                      
                      <div className="bg-green-100">
                        <div className="p-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-green-600" />
                            <span className="font-medium">Approved</span>
                          </div>
                          <p className="text-2xl font-bold mt-2">
                             {tasks.filter((task) => task.completed).length} 
                          </p>
                        </div>
                      </div>
            
                      <div className="bg-yellow-100">
                        <div className="p-4">
                          <div className="flex items-center space-x-2">
                            <User className="h-5 w-5 text-yellow-600" />
                            <span className="font-medium">Pending</span>
                          </div>
                          <p className="text-2xl font-bold mt-2">
                            {tasks.filter((task) => task.active).length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
  )
}

export default TaskProgress