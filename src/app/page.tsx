import Link from "next/link";
import Navbar1 from "./components/Navbar1";
import Image from "next/image";


export default function Home() {
  return (
    <div className=" bg-black min-h-screen">
      <Navbar1/>

      {/* first layout */}
      <div className="pt-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 h-full">
      
        <div className="grid md:grid-cols-2 gap-8 items-center h-full ">
        
          {/* Left Content */}
          
          <div className="space-y-6 mx-auto">
            <p className="text-orange-500 font-script text-2xl">Its Quick & Amusing!</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-orange-500">Th</span>e Art of speed
              <br />
              food <span>Quality</span>
            </h1>
            <p className="text-gray-400 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
            <Link
              href="/menu"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              See Menu
            </Link>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full aspect-square">
              <Image
                src="/home-pic-1.png"
                alt="Delicious dish with rice and eggs"
                fill
                className="object-contain"
                priority
              />
              
            </div>
          </div>
        </div>
      </div>
     </div>




     {/* second layout */}


     <div className="pt-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-2 h-full">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full py-12">
          {/* Left Content */}
          <div className="space-y-6 mx-auto">
            <p className="text-orange-500 font-script text-2xl">About us</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-orange-500">We </span>Create the best
              <br />
              foody <span>product</span>
            </h1>
            <p className="text-gray-400 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
            <h1>✔️ Lorem ipsum dolor sit amet, consectetur </h1>
            <h1>✔️ Lorem ipsum dolor sit amet, consectetur </h1>
            <h1>✔️ Lorem ipsum dolor sit amet, consectetur </h1>

            <Link
              href="/menu"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              Read More
            </Link>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full aspect-square">
              <Image
                src="/home-pic-2.png"
                alt="Delicious dish with rice and eggs"
                fill
                className="object-contain"
                priority
              />
              
            </div>
          </div>
        </div>
      </div>
     </div>

{/* 
food-catogories */}

     <div className='flex justify-center  mt-8 ml-9'>
  <Image
    src="/home-pic-3.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
</div>

{/* why choose us */}

<div className="pt-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-2 h-full">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full py-12">
        <div className="relative">
            <div className="relative w-full aspect-square">
              <Image
                src="/home-pic-4.png"
                alt="Why Choose Us"
                fill
                className="object-contain"
                priority
              />
              
            </div>
          </div>
         
          <div className="space-y-6 mx-auto">
            <p className="text-orange-500 font-script text-2xl">Why Choose us</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-orange-500">Ex</span>tra ordinary taste and Experienced
              <br />
              foody <span>product</span>
            </h1>
            <p className="text-gray-400 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
            <Image
                src="/home-pic-4-icon.png"
                alt="Why Choose Us"
                height={250}
                width={250}
              />
          </div>
        </div>
      </div>
     </div>

     {/* clients */}

     <div className='  mt-8 '>
  <Image
    src="/home-pic-5.png"
    alt='Food Categories'
    height={1000}
    width={1000}
    className="w-full"
    
  />
</div>



<div className='flex justify-center mt-8 mb-4 '>
  <Image
    src="/home-pic-6.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
</div>


<div className='flex justify-center mt-8 '>
  <Image
    src="/home-pic-7.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
</div>

<div className='flex justify-center mt-8 '>
  <Image
    src="/home-pic-8.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
</div>

<div className='  mt-8 '>
  <Image
    src="/home-pic-5.png"
    alt='Food Categories'
    height={1000}
    width={1000}
    className="w-full"
    
  />
</div>

<div className='flex justify-center mt-8 '>
  <Image
    src="/home-pic-10.png"
    alt='Food Categories'
    height={1000}
    width={1000}
  />
</div>






























































    </div>
  );
}
