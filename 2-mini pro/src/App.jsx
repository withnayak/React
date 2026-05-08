import Page from "./components/Page"
import Header from "./components/header"
const App = () => {
  const profile =
    [
      {
        "workersLogo": "https://i.pinimg.com/736x/17/94/30/179430bbe08926ede2e09a7771622a06.jpg",
        "name": "Sidharth Malhotra",
        "post": "UI/UX Designer",
        "profile": "Freelancer",
        "tag1": "UI",
        "tag2": "UX",
        "tag3": "Figma",
        "more": "+4",
        "pay": 45,
        "about": "Sid is a 30 year old UI/UX designer with 5 years of experience in creating intuitive user interfaces for fintech startups."
      },
      {
        "workersLogo": "https://i.pinimg.com/736x/62/3e/db/623edb193f01d232b24930d555ed064f.jpg",
        "name": "Arjun Nayak",
        "post": "Mobile App Developer",
        "profile": "Epic Coders",
        "tag1": "Android",
        "tag2": "iOS",
        "tag3": "Flutter",
        "more": "+2",
        "pay": 60,
        "about": "Nayak is an android and ios designer with advanced knowledge in coding and cross-platform architecture."
      },
      {
        "workersLogo": "https://i.pinimg.com/736x/09/6f/08/096f086caa18534925de966352e9122b.jpg",
        "name": "Sarah Jenkins",
        "post": "Full Stack Developer",
        "profile": "Apple Inc",
        "tag1": "PHP",
        "tag2": "React",
        "tag3": "MySQL",
        "more": "+8",
        "pay": 95,
        "about": "Sarah is a senior engineer at Apple with over a decade of experience in building scalable backend systems and sleek frontends."
      },
      {
        "workersLogo": "https://i.pinimg.com/1200x/1e/0e/9b/1e0e9be822b3939af2d6f745a2aa6e67.jpg",
        "name": "Elena Rodriguez",
        "post": "Graphic Designer",
        "profile": "Adobe Systems",
        "tag1": "Photoshop",
        "tag2": "Illustrator",
        "tag3": "InDesign",
        "more": "+3",
        "pay": 55,
        "about": "Elena specializes in brand identity and digital illustration, having worked on global campaigns for major tech firms."
      },
      {
        "workersLogo": "https://i.pinimg.com/736x/46/0e/62/460e628c012853087f072867ee9691f9.jpg",
        "name": "David Chen",
        "post": "Product Designer",
        "profile": "Freelancer",
        "tag1": "Wireframing",
        "tag2": "Prototyping",
        "tag3": "Sketch",
        "more": "+5",
        "pay": 70,
        "about": "David is a meticulous product designer focused on solving complex user problems through data-driven design thinking."
      },
      {
        "workersLogo": "https://i.pinimg.com/736x/cd/bf/10/cdbf10857a08b689e386def9667060a8.jpg",
        "name": "Amara Okafor",
        "post": "Backend Developer",
        "profile": "Google",
        "tag1": "Python",
        "tag2": "Django",
        "tag3": "AWS",
        "more": "+6",
        "pay": 110,
        "about": "Amara is a cloud infrastructure expert who enjoys optimizing database performance and securing API endpoints."
      },
      {
        "workersLogo": "https://i.pinimg.com/736x/d9/8c/9c/d98c9cfd62e5e69b7ff5391fe88f3191.jpg",
        "name": "Leo Maxwell",
        "post": "Motion Designer",
        "profile": "Epic Coders",
        "tag1": "After Effects",
        "tag2": "Cinema 4D",
        "tag3": "Lottie",
        "more": "+2",
        "pay": 50,
        "about": "Leo brings static interfaces to life with smooth transitions and high-end micro-interactions for mobile apps."
      },
      {
        "workersLogo": "https://i.pinimg.com/736x/1d/15/04/1d15047d0cda8c9e2f64486e2291a0b2.jpg",
        "name": "Priya Sharma",
        "post": "Frontend Architect",
        "profile": "Freelancer",
        "tag1": "Vue.js",
        "tag2": "Tailwind",
        "tag3": "TypeScript",
        "more": "+4",
        "pay": 80,
        "about": "Priya is a clean-code enthusiast who builds modular, high-performance web applications for e-commerce brands."
      },
      {
        "workersLogo": "https://i.pinimg.com/736x/fd/47/1f/fd471f042fca4a00fc40a35fd3bcf95e.jpg",
        "name": "Marcus Thorne",
        "post": "Game UI Designer",
        "profile": "Electronic Arts",
        "tag1": "Unity",
        "tag2": "GUI",
        "tag3": "Photoshop",
        "more": "+7",
        "pay": 90,
        "about": "Marcus has 8 years of experience designing immersive HUDs and menus for AAA gaming titles."
      },
      {
        "workersLogo": "https://i.pinimg.com/736x/e0/85/8f/e0858f7482ba658b776122b37f0ae9e8.jpg",
        "name": "Chloe Voss",
        "post": "Interaction Designer",
        "profile": "Meta",
        "tag1": "VR/AR",
        "tag2": "UX",
        "tag3": "Unity",
        "more": "+5",
        "pay": 120,
        "about": "Chloe explores the future of spatial computing and gesture-based navigation at the Meta Reality Labs."
      },
      {
        "workersLogo": "https://i.pinimg.com/736x/78/18/ee/7818ee465c163aaa4ed8955a6085fc86.jpg",
        "name": "James Wilson",
        "post": "Web Developer",
        "profile": "Freelancer",
        "tag1": "WordPress",
        "tag2": "PHP",
        "tag3": "CSS3",
        "more": "+3",
        "pay": 40,
        "about": "James is a versatile web developer specializing in custom WordPress themes and high-speed landing pages."
      },
      {
        "workersLogo": "https://i.pinimg.com/736x/44/a9/62/44a9621f46217bfbdd6c2d92adf2806a.jpg",
        "name": "Sofia Gatti",
        "post": "UX Researcher",
        "profile": "Spotify",
        "tag1": "Testing",
        "tag2": "Surveys",
        "tag3": "Analytics",
        "more": "+4",
        "pay": 85,
        "about": "Sofia conducts deep-dive user interviews and usability testing to help Spotify refine its personalized discovery features."
      }
    ];
  return (

    <div >
      <Header />
      <div className='parent'>
        {profile.map(function (elem, idx) {
          return <div key={idx} >
            <Page logo={elem.workersLogo} name={elem.name} post={elem.post} profile={elem.profile} tag1={elem.tag1} tag2={elem.tag2} tag3={elem.tag3} more={elem.more} pay={elem.pay} about={elem.about} />
          </div>

        })}
      </div>
    </div>
  )
}

export default App