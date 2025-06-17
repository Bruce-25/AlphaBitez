import Navbar from "./Navbar";
import "./Styling/About.css";

const About = () => {
  return (

    
    <section className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <Navbar/>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-widest mb-6 border-b-2 border-gray-600 pb-2 uppercase">
          About Alpha Bitez
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
          Alpha Bitez isn’t just a brand — it’s a statement. Born from a vision to bring timeless quality to the table, we blend the raw energy of vintage street culture with a cold, calculated passion for good taste. Every product we serve carries a code: *Bold, Clean, Unapologetic*.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
          While our roots lie in gritty ambition, our outlook is global. Alpha Bitez doesn’t carry the flag of a single city — we carry the attitude of the world. Whether you’re in Nairobi, Tokyo, Berlin, or the Bronx, the experience is the same: crafted, deliberate, elite.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
          We don’t chase trends. We honor legacy. From our visuals to our values, we’re built for those who operate on a different frequency — the ones who value authenticity over hype, detail over noise, silence over shouting. Alpha Bitez is for those who know.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8 italic">
          "This isn’t fast food. This is food that moves with purpose."
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Welcome to Alpha Bitez — Where the flavor is classic.  
          The presence is global.  
          And the mindset? Unshakably Alpha.
        </p>
      </div>
    </section>
  )
}

export default About
