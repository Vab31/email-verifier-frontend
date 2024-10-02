import React from 'react'

const TaskList = ({firstName, lastName, companyName, email, adminImg}) => {
  return (
    <div className="">
        <div className="my-4 flex gap-2">
            <input type="checkbox" />
            <span className="ml-[2%] w-[17%] ">{firstName+" "+lastName}</span>
            <span class="ml-[2%] w-[17%]">{companyName}</span>
            <span class="ml-[2%] w-[17%]">{email}</span>
        </div>
    </div>
  )
}

// const TaskList = ({name, adminImg, admin, members, statusImg, status, runTime, finishTime}) => {
//   return (
//     <div className="">
//         <div className="my-4 flex gap-2">
//             <input type="checkbox" />
//             <span className="ml-[2%] w-[17%] ">{name}</span>
//             <span className="ml-[2%] w-[12%] flex gap-2 items-center">
//                 <img src={adminImg} alt={`${admin}'s-img`} className="h-4 w-4"/> {admin}
//             </span>
//             <span className="ml-[2%] w-[10%] ">{members}</span>
//             <div className="ml-[2%] w-[22%] bg-slate-100 rounded-full flex items-center gap-2 ">
//               <img src={statusImg} alt={`${status}'s-img`} className="h-5 w-5"/> 
//               <span >{status}</span>
//             </div>
//             <span className="ml-[2%] w-[12%] ">{runTime}</span>
//             <span className="ml-[2%] w-[12%] bg-slate-200 rounded-full">{finishTime}</span>
//         </div>
//     </div>
//   )
// }

export default TaskList