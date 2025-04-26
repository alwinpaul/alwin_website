import Image from "next/image";
import Link from "next/link";

import { skillsData } from "./../data/skillData"
import SkillCard from "public/components/SkillCard";

export default function Home() {

  const allSkills = skillsData.map((skill) => (
    <SkillCard {...skill} key={skill.caption} />
  ));

  return (

    <section className="h-[100vh] overflow-scroll bg-slate-700">
      <header className="h-16 w-full z-10 shadow-md border-b-slate-700 fixed top-0 left-0 bg-white flex items-center">
        <div className="w-6/12">
          <div className="w-64 ml-30">
            <Image src="/alwin_logo.png" alt="alwin logo" layout="responsive" width={240} height={60}></Image>
          </div>
        </div>
      </header>
      <section className="relative h-[100vh] p-40">
        <div className="h-[500px] w-4/12 border border-slate-300 rounded-lg absolute bg-white top-30 left-30 overflow-hidden shadow-2xl">
          {/* <div className="absolute left-0 top-0 w-full h-full bg-slate-400 opacity-30"></div> */}
          <Image src="/alwin2.jpg" alt="alwin profile picture" layout="responsive" width={270} height={400}></Image>
        </div>
        <div className="h-[600px] w-8/12 border border-slate-400 rounded-lg float-right bg-white shadow-2xl">
          <div className="h-[500px] w-9/12 ml-36 mt-12 py-5">
            <div className="font-bold text-teal-700 text-xl">Hey there! I'm Alwin.</div>
            <div className="font-bold text-7xl my-5">I am Passionate about bringing ideas to life.</div>
            <div className="font-light text-xl my-5">I love building digital tools that solve real-world problems with JavaScript, React, and Vue. I'm a keen learner always finding creative ways to make software better and more intuitive.</div>
            <div className="h-12 w-40 flex items-center justify-start my-5">
              <div className="w-10 h-10 mr-2 hover:cursor-pointer hover:h-12 hover:w-12">
                <Link target="_blank" href="https://www.linkedin.com/in/alwinp/">
                  <Image src="/linkedin.svg" alt="linkedIn icon" layout="responsive" width={10} height={10}></Image>
                </Link>
              </div>
              <div className="w-10 h-10 mr-2 hover:cursor-pointer hover:h-12 hover:w-12">
                <Link target="_blank" href="mailto:alwin.paul47@gmail.com">
                  <Image src="/email.svg" alt="email icon" layout="responsive" width={10} height={10}></Image>
                </Link>
              </div>
              <div className="w-10 h-10 mr-2 hover:cursor-pointer hover:h-12 hover:w-12">
                <Link target="_blank" href="https://github.com/alwinpaul/">
                  <Image src="/github.svg" alt="github icon" layout="responsive" width={10} height={10}></Image>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section className="relative h-[100vh] p-20 flex items-center justify-center">
        <div className="h-[650px] w-full border border-slate-400 rounded-lg bg-white shadow-2xl flex items-center justify-center">
          <div className="h-[600px] w-11/12 py-5">
            <div className="font-bold text-teal-700 text-xl">My Offerings</div>
            <div className="font-bold text-7xl my-5">What I can do for you.</div>
            <div className="my-10 flex items-center justify-start gap-10">
              <div className="h-96 p-3 w-3/12 border border-slate-400 rounded-lg">
                <div className="w-20 h-20 m-6">
                  <Image src="/website-dev.svg" alt="Website Development" layout="responsive" width={20} height={20}></Image>
                </div>
                <div className="m-2 font-bold text-3xl text-slate-600">
                  Website Development
                </div>
                <div className="m-2 text-lg text-slate-500">
                  Launching a new site or upgrading an existing one? I deliver expert frontend solutions to bring your vision to life.
                </div>
              </div>

              <div className="h-96 p-3 w-3/12 border border-slate-400 rounded-lg">
                <div className="w-20 h-20 m-6">
                  <Image src="/dashboard-dev.svg" alt="Dashboard development" layout="responsive" width={20} height={20}></Image>
                </div>
                <div className="m-2 font-bold text-3xl text-slate-600">
                  Dashboard Development
                </div>
                <div className="m-2 text-lg text-slate-500">
                  Need a dynamic dashboard? I develop solutions that integrate external data, feature insightful visualizations, and drive meaningful understanding.
                </div>
              </div>

              <div className="h-96 p-3 w-3/12 border border-slate-400 rounded-lg">
                <div className="w-20 h-20 m-6">
                  <Image src="/api-int.svg" alt="Api Integration" layout="responsive" width={20} height={20}></Image>
                </div>
                <div className="m-2 font-bold text-3xl text-slate-600">
                  Backend API Integration
                </div>
                <div className="m-2 text-lg text-slate-500">
                  Seeking backend API integration? I build and implement efficient connections, enabling your frontend to access data and functionality reliably.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="relative h-[100vh] p-20 flex items-center justify-center">
        <div className="h-[600px] w-full border border-slate-400 rounded-lg bg-white shadow-2xl flex items-center justify-center">
          <div className="h-[550px] w-11/12 py-5">
            <div className="font-bold text-teal-700 text-xl">My Stack</div>
            <div className="font-bold text-7xl my-5">Technologies I work with.</div>
            <div className='w-10/12 my-10 p-2 flex gap-8 gap-x-36 flex-wrap'>
              {allSkills}
            </div>
          </div>

        </div>
      </section>


    </section>
  );
}
