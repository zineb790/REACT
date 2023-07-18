import './App.css';
import Students from './components/Students';
import { useState } from 'react';

function App() {
  const [studentData] = useState({
    students: [
      [
        {
          name: 'Cait Yomorta',
          bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
          scores: [
            {
              date: '2018-02-08',
              score: 77
            },
            {
              date: '2018-04-22',
              score: 92
            },
            {
              date: '2018-09-15',
              score: 68
            }
          ]
        },
        {
          name: 'Holly Baird',
          bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
          scores: [
            {
              date: '2018-12-14',

              score: 88
            },
            {
              date: '2019-01-09',
              score: 79
            },
            {
              date: '2019-02-23',
              score: 91
            },
            {
              date: '2019-03-01',
              score: 95
            }
          ]
        },
        {
          name: 'Wes Mungia',
          bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
          scores: [
            {
              date: '2018-10-11',
              score: 62
            },
            {
              date: '2018-11-24',
              score: 74
            },
            {
              date: '2018-12-19',
              score: 85
            }
          ]
        }
      ]


    ]
  }
  )
  return (
    <div className="App">
      <h1>HELLO! WEEK 8 DAY 3 HW</h1>
      <div><Students studentData={studentData} /></div>
{/*
-Use the following array of "student" data to initialize state as an object with a studentskey in the <App>component:
-App component to display a <Student>component for each student object in the studentsarray being held in state.
-Code the <Student>component so that it:
-Renders the student's name& bioproperties
-Renders a <Score>component for each score object in the student's scoresproperty.
-Code the <Score>component so that it renders the score object's date& scoreproperties.
-You will not update state in this lab, just initializing it in App.js, passing it as props and rendering it's data in the components
*/}
    </div>
  );
}

export default App;