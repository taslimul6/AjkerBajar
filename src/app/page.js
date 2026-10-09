
import Hero from "./components/homepage/Hero";
import Highest from "./components/homepage/Highest";
import Lowest from "./components/homepage/Lowest";
import AllProduct from "./components/homepage/AllProduct";

export default function Home() {
  return (
    <>

    

     <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-7 sm:py-9">



      <Hero/>
      <Highest />
      <Lowest />
      <AllProduct />


     </main>
    
    
    
    </>
  );
}
