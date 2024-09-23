import React from 'react'
import AdminImage from './assets/avatar.png'
import TaskList from './TaskList'
import CompletedImg from './assets/checked.png'
import InProgressImg from './assets/in-progess.png'

const TaskListCards = () => {

    const TaskListData = [
        {
            name: 'Anything',
            adminImg: AdminImage,
            admin: 'Prince',
            members: '5',
            statusImg: CompletedImg,
            status: 'In progress', 
            runTime: '6 Hours', 
            finishTime: '14 Oct'
        },
        {
            name: 'Bnything',
            adminImg: AdminImage,
            admin: 'Abhinav',
            members: '3',
            statusImg: CompletedImg,
            status: 'In progress', 
            runTime: '2 Hours', 
            finishTime: '15 Oct'
        },
        {
            name: 'Cnything',
            adminImg: AdminImage,
            admin: 'Vishnu',
            members: '4',
            statusImg: InProgressImg,
            status: 'Done', 
            runTime: '3 Hours', 
            finishTime: '16 Oct'
        },
        {
            name: 'Dnything',
            adminImg: AdminImage,
            admin: 'Raj',
            members: '2',
            statusImg: CompletedImg,
            status: 'In progress', 
            runTime: '1 Hours', 
            finishTime: '17 Oct'
        },
        {
            name: 'Enything',
            adminImg: AdminImage,
            admin: 'Abhay',
            members: '1',
            statusImg: CompletedImg,
            status: 'Done', 
            runTime: '4 Hours', 
            finishTime: '18 Oct'
        },
        {
            name: 'Fnything',
            adminImg: AdminImage,
            admin: 'Nitin',
            members: '2',
            statusImg: InProgressImg,
            status: 'Done', 
            runTime: '4 Hours', 
            finishTime: '20 Oct'
        },
        {
            name: 'Enything',
            adminImg: AdminImage,
            admin: 'Abhay',
            members: '1',
            statusImg: CompletedImg,
            status: 'Done', 
            runTime: '4 Hours', 
            finishTime: '18 Oct'
        },
        {
            name: 'Fnything',
            adminImg: AdminImage,
            admin: 'Nitin',
            members: '2',
            statusImg: InProgressImg,
            status: 'Done', 
            runTime: '4 Hours', 
            finishTime: '20 Oct'
        },
        {
            name: 'Anything',
            adminImg: AdminImage,
            admin: 'Prince',
            members: '5',
            statusImg: CompletedImg,
            status: 'In progress', 
            runTime: '6 Hours', 
            finishTime: '14 Oct'
        },
        {
            name: 'Bnything',
            adminImg: AdminImage,
            admin: 'Abhinav',
            members: '3',
            statusImg: CompletedImg,
            status: 'In progress', 
            runTime: '2 Hours', 
            finishTime: '15 Oct'
        },
        {
            name: 'Cnything',
            adminImg: AdminImage,
            admin: 'Vishnu',
            members: '4',
            statusImg: InProgressImg,
            status: 'Done', 
            runTime: '3 Hours', 
            finishTime: '16 Oct'
        },
    ]


  return (
    <div className="flex flex-col h-80 overflow-y-scroll">
        {TaskListData.map((task, index) => (
            <TaskList
                key={index}
                name={task.name}
                adminImg={task.adminImg}
                admin={task.admin}
                members={task.members}
                statusImg={task.statusImg}
                status={task.status}
                runTime={task.runTime}
                finishTime={task.finishTime}
            />
        ))}
    </div>
  )
}

export default TaskListCards;