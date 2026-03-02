import HeroPage from "./hero/HeroPage";

const HomePage = () => {
  let users = [
    {
      imgPath: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nulla dolorem earum. Porro alias quo, consequatur dolor delectus itaque. Nemo!",
      tag: "Satisfied",
      color: "blue"
    },
    {
      imgPath: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Distinctio nulla dolorem earum. Porro alias quo, delectus itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo!",
      tag: "Underserved",
      color: "magenta"
    },
    {
      imgPath: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Neque debitis laudantium repellat quibusdam quaerat quas ad officia vero asperiores unde consequatur ducimus praesentium expedita?",
      tag: "Undersourced",
      color: "orange"
    },
    {
      imgPath: "https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "sit amet consectetur, adipisicing elit. Quis, neque! Neque debitis laudantium repellat quibusdam quaerat sunt cum, dicta ipsa suscipit necessitatibus.",
      tag: "UnderBanked",
      color: "limegreen"
    },
  ];


  return (
    <section className="bg-white h-screen w-full hero-page">
      <HeroPage users={users}></HeroPage>
    </section>
  )
}

export default HomePage
