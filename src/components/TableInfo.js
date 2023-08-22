import React from 'react';

const TableInfo = ({tableData}) => {
    return (
        <div>
            <div className="flex">
               <div className="box"><h3>Понедельник</h3>
               <ol>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
               </ol></div>
               <div className="box"><h3>Вторник</h3>
               <ol>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
               </ol></div>
               <div className="box"><h3>Среда</h3>
               <ol>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
               </ol></div>
               <div className="box"><h3>Четверг</h3>
               <ol>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
               </ol></div>
               <div className="box"><h3>Пятница</h3>
               <ol>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
               </ol></div>
               <div className="box"><h3>Суббота</h3>
               <ol>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
                   <li>{tableData["first-year"]?.web1?.monday?.subject1}</li>
               </ol></div>
           </div>
        </div>
    );
};

export default TableInfo;