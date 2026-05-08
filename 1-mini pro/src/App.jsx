
import Id from './components/Id'

const App = () => {

  const jobOpenings = [
  {
    "brandLogo": "https://i.pinimg.com/736x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg",
    "brandPage": "https://www.google.com/",
    "companyName": "Google",
    "datePosted": "2 days ago",
    "post": "Senior Software Engineer, Cloud AI",
    "tag1": "Full-time",
    "tag2": "Senior level",
    "pay": "$125",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://i.pinimg.com/736x/fb/66/c9/fb66c922b0ad029e61fdab87badd8e27.jpg",
     "brandPage": "https://www.apple.com/",
    "companyName": "Apple",
    "datePosted": "5 days ago",
    "post": "Machine Learning Research Scientist",
    "tag1": "Full-time",
    "tag2": "Senior level",
    "pay": "$140",
    "location": "Delhi, India"
  },
  {
    "brandLogo": "https://i.pinimg.com/1200x/a1/0a/15/a10a159692ac812889f938dd1de9afba.jpg",
     "brandPage": "https://www.microsoft.com/",
    "companyName": "Microsoft",
    "datePosted": "1 week ago",
    "post": "Azure Solutions Architect",
    "tag1": "Full-time",
    "tag2": "Mid-Senior level",
    "pay": "$110",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://i.pinimg.com/736x/d9/bd/cf/d9bdcfaa699763ad3ff7482d540078f2.jpg",
     "brandPage": "https://www.amazon.in/",
    "companyName": "Amazon",
    "datePosted": "3 days ago",
    "post": "Frontend Developer (AWS)",
    "tag1": "Full-time",
    "tag2": "Junior level",
    "pay": "$85",
    "location": "Kolkata, India"
  },
  {
    "brandLogo": "https://i.pinimg.com/736x/da/8c/68/da8c6866ef2e8e4b2acca1e36322564c.jpg",
     "brandPage": "https://www.meta.com/",
    "companyName": "Meta",
    "datePosted": "2 weeks ago",
    "post": "Product Designer, Metaverse",
    "tag1": "Full-time",
    "tag2": "Senior level",
    "pay": "$130",
    "location": "Menlo Park, CA"
  },
  {
    "brandLogo": "https://i.pinimg.com/236x/29/44/57/294457fb8895d99bf68f53e87c946b47.jpg",
     "brandPage": "https://www.nvidia.com/",
    "companyName": "NVIDIA",
    "datePosted": "4 days ago",
    "post": "Deep Learning Engineer",
    "tag1": "Full-time",
    "tag2": "Senior level",
    "pay": "$155",
    "location": "Santa Clara, CA"
  },
  {
    "brandLogo": "https://i.pinimg.com/1200x/8f/b2/19/8fb219fa9a12b75ae5bf1786185b85d1.jpg",
     "brandPage": "https://www.netflix.com/",
    "companyName": "Netflix",
    "datePosted": "1 week ago",
    "post": "Security Engineer",
    "tag1": "Full-time",
    "tag2": "Senior level",
    "pay": "$160",
    "location": "Los Gatos, CA"
  },
  {
    "brandLogo": "https://i.pinimg.com/736x/11/84/6e/11846ed67cb760de51203ae4be3ebfa2.jpg",
     "brandPage": "https://www.tesla.com/",
    "companyName": "Tesla",
    "datePosted": "6 days ago",
    "post": "Autopilot Software Intern",
    "tag1": "Part-time",
    "tag2": "Junior level",
    "pay": "$45",
    "location": "Palo Alto, CA"
  },
  {
    "brandLogo": "https://i.pinimg.com/1200x/67/07/a9/6707a9c07a04af2b260aca69fcae891c.jpg",
     "brandPage": "https://www.adobe.com/",
    "companyName": "Adobe",
    "datePosted": "3 weeks ago",
    "post": "Data Scientist, Experience Cloud",
    "tag1": "Full-time",
    "tag2": "Mid level",
    "pay": "$95",
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://i.pinimg.com/736x/ba/dc/df/badcdf66f646cc9afdab9d2632b75c59.jpg",
     "brandPage": "https://www.intel.com/",
    "companyName": "Intel",
    "datePosted": "1 day ago",
    "post": "Hardware Design Engineer",
    "tag1": "Full-time",
    "tag2": "Junior level",
    "pay": "$75",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://i.pinimg.com/736x/b3/fd/55/b3fd55c948e22e0f7ebf7a6dc9dcb357.jpg",
     "brandPage": "https://www.salesforce.com/",
    "companyName": "Salesforce",
    "datePosted": "3 days ago",
    "post": "Backend Engineer, Slack",
    "tag1": "Full-time",
    "tag2": "Mid level",
    "pay": "$105",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://i.pinimg.com/736x/6f/1c/ad/6f1cad21097bfb7fe1d8580953ef161c.jpg",
     "brandPage": "https://www.ibm.com/",
    "companyName": "IBM",
    "datePosted": "4 days ago",
    "post": "Quantum Computing Researcher",
    "tag1": "Full-time",
    "tag2": "Senior level",
    "pay": "$135",
    "location": "Yorktown Heights, NY"
  }
];

  return (
    <div className='parent'>
     {jobOpenings.map(function(elem,idx){

        return <div key={idx}>
          <Id logo={elem.brandLogo} page={elem.brandPage} company= {elem.companyName} datePosted={elem.datePosted} post ={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
     
        </div>
        })}
    </div>
  )
}

export default App