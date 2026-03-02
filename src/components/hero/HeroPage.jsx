import HeroText from './HeroText'
import HeroImageContent from './HeroImageContent' 

const HeroPage = (props) => {
  function handleClick() {
    console.log("Button clicked!")
  }

  function handleSearch(ev) {
    document.getElementById("showSearchText").innerText = ev.target.value;
  }

  return (
    <section className='pt-20 px-12 hero-page'>
      <div className="top-bar flex flex-nowrap items-center justify-between">
        <button onClick={handleClick} className="btn-dark py-3 px-7 bg-gray-950 text-[16px] text-gray-100 rounded-full uppercase tracking-wider">Target Audience</button>
        <div className='flex align-center gap-3'>
          <input onChange={handleSearch} className='btn-dark py-3 px-6 bg-gray-200 text-[16px] rounded-full uppercase outline-0 w-90 tracking-wide' type="search" placeholder='Digital banking platform' />
          <p className='m-0 self-center' id="showSearchText"></p>
        </div>
      </div>

      <div className="h-[80vh] main-content flex flex-nowrap items-center justify-between gap-8 pt-20">
        <HeroText />
        <HeroImageContent users={props.users} />
      </div>

    </section>
  )
}

export default HeroPage
