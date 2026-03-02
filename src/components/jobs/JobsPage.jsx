import Card from "./Card"

const JobsPage = () => {
  const jobListings = [
    {
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      postedTime: "2 days ago",
      jobRole: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      payPerHour: "$120/hr",
      city: "Bangalore, India"
    },
    {
      companyLogo: "https://i.pinimg.com/736x/a4/8f/41/a48f416986eb5b30c5ed41efc9ef10ab.jpg",
      companyName: "Amazon",
      postedTime: "Yesterday",
      jobRole: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      payPerHour: "$95/hr",
      city: "Hyderabad, India"
    },
    {
      companyLogo: "https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg",
      companyName: "Flipkart",
      postedTime: "5 days ago",
      jobRole: "UI/UX Designer",
      tag1: "Part-time",
      tag2: "Junior Level",
      payPerHour: "$60/hr",
      city: "Bangalore, India"
    },
    {
      companyLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      postedTime: "1 week ago",
      jobRole: "React Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      payPerHour: "$110/hr",
      city: "Noida, India"
    },
    {
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEjY90pS-UfgHJU4glc8Aiupp1xCn_jcvRQ&s",
      companyName: "Paytm",
      postedTime: "3 days ago",
      jobRole: "Mobile App Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      payPerHour: "$75/hr",
      city: "Noida, India"
    },
    {
      companyLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
      companyName: "Netflix",
      postedTime: "30+ days ago",
      jobRole: "Full Stack Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      payPerHour: "$140/hr",
      city: "Remote, India"
    },
    {
      companyLogo: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png",
      companyName: "Swiggy",
      postedTime: "Today",
      jobRole: "Product Designer",
      tag1: "Full-time",
      tag2: "Mid Level",
      payPerHour: "$85/hr",
      city: "Bangalore, India"
    },
    {
      companyLogo: "https://www.citypng.com/public/uploads/preview/zomato-round-logo-icon-701751694968327lvye6zxamg.png",
      companyName: "Zomato",
      postedTime: "4 days ago",
      jobRole: "Frontend Engineer",
      tag1: "Internship",
      tag2: "Junior Level",
      payPerHour: "$40/hr",
      city: "Gurgaon, India"
    },
    {
      companyLogo: "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
      companyName: "Infosys",
      postedTime: "2 weeks ago",
      jobRole: "Software Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      payPerHour: "$55/hr",
      city: "Pune, India"
    },
    {
      companyLogo: "https://static.vecteezy.com/system/resources/previews/027/127/501/non_2x/uber-logo-uber-icon-transparent-free-png.png",
      companyName: "Uber",
      postedTime: "8 days ago",
      jobRole: "Data Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      payPerHour: "$105/hr",
      city: "Bangalore, India"
    }
  ];

  return (
    <section className="pt-24 pb-20 min-h-screen bg-gray-800 card-wrapper">
      <h1 className="text-4xl font-medium tracking-wide pb-4">User Profiles</h1>
      <ul>
        {/* {jobListings.map((item, idx) => <li><Card key={idx} companyLogo={item.companyLogo} companyName={item.companyName} postedTime={item.postedTime} jobRole={item.jobRole} tag1={item.tag1} tag2={item.tag2} payPerHour={item.payPerHour} city={item.city}></Card></li>)} */}
        {jobListings.map((item, idx) => <li key={idx} className="lg:max-w-1/4"><Card {...item}></Card></li>)}
      </ul>
    </section>
  )
}

export default JobsPage
