import { CircleCheck, Trash } from 'lucide-react';

const TaskTable = ({ tasks, onDelete, onUpdate }) => {

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });}
    return (
        <div className="bg-white rounded-lg shadow overflow-hidden max-w-5xl mx-auto mt-6">
            
            <div className="overflow-x-auto">

                {/* displaying table heading   */}
                <div className='w-full grid grid-cols-6 max-[900px]:grid-cols-3  max-sm:hidden gap-4 px-3 border-b-2 text-sm bg-[#473a96] text-white  2xl:text-lg text-center py-2'>
                    <div class="max-[900px]:hidden">Title</div>
                    <div class="...">email</div>
                    <div class="...">dueDate</div>
                    <div class="">description</div>
                    <div class="max-[900px]:hidden">Status</div>
                    <div class="max-[900px]:hidden">action</div>
                </div>

                {/* all tasks */}
                <div>
                    {tasks?.map((e, index) => (
                        <div key={index} className='w-full grid grid-cols-6 max-[900px]:grid-cols-3 max-sm:grid-cols-1 max-sm:justify-start border-b-2 2xl:text-lg text-black gap-4 max-sm:gap-1 px-3 text-md text-center max-sm:text-start text-sm py-2 pb-2 cursor-pointer hover:bg-[#dcdcdd] '>
                            <div class="max-[900px]:hidden">{e?.title}</div>
                            <div class="max-sm:font-bold max-sm:pl-10">{e?.email}</div>
                            <div class="max-sm:font-bold max-sm:pl-10">{formatDate(e?.dueDate)}</div>
                            <div class="max-sm:font-bold max-sm:pl-10">{e?.description}</div>
                            <div class="w-40 text-blue-600 text-md max-lg:overflow-hidden xl:overflow-visible max-[900px]:hidden">
                                <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                 ${e.active ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'

                                        }`}
                                > {e.completed ? "completed" : "active"}

                                </span>
                            </div>
                            <div class="max-sm:font-bold max-sm:pl-10">
                                {e.active === true && (
                                    <div className='flex justify-center items-center gap-4'>

                                        <Trash className='text-red-600 cursor-pointer' onClick={() => onDelete(e._id)} />

                                        <CircleCheck className='text-green-600 cursor-pointer' onClick={() => onUpdate(e)} />

                                    </div>
                                )}
                            </div>


                        </div>))}
                </div></div>

        </div>
    )
}

export default TaskTable