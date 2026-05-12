import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2' 
const App = () => {

  const users =[

    {
      no: 1,
      "color": "#4CAF50",
      img :'https://i.pinimg.com/736x/17/6c/dd/176cdd28feb04c08c330bc5d2a3dc715.jpg' ,
      text : 'Strategic marketing leader with 10 years experience driving digital growth through data-driven campaigns and cross-functional team mentorship.' ,
      tag :'Satisfied', 
    },
    {
      no: 2,
      "color": "#E91E63",
      img :'https://i.pinimg.com/1200x/b4/f2/4b/b4f24b1930d05490a2090a2d1414945a.jpg' ,
      text : 'Innovative product manager with a proven track record of delivering successful digital products and leading agile development teams.' ,
      tag :'Undeserved', 
    },
    {
      no: 3,
      "color": "#2196F3",
      img :'https://i.pinimg.com/736x/cf/db/2f/cfdb2ffc2643584278cc7d91a67dc908.jpg' ,
      text : 'Senior Project Manager specializing in Agile methodologies, delivering complex infrastructure projects on time and consistently under budget.',
      tag :'Underbanked', 
    },
    {
      no: 4,
      "color": "#FF5722",
      img :'https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg' ,
      text : 'Data scientist with expertise in machine learning and statistical analysis, driving actionable insights from complex datasets.Thanks to my work',
      tag :'Best', 
    },
    {
      no: 5,
      "color": "#673AB7",
      img :'https://i.pinimg.com/736x/81/1b/bb/811bbb6cf486c694dc11efe51b932f40.jpg' ,
      text : 'Results-driven sales executive with a strong track record of exceeding targets and building long-term client relationships.thanks to my work',
      tag :'Good', 
    },
    
  ]
  return (
    <div>
      <Section1 users={users}/>
      
    </div>

  )
}

export default App