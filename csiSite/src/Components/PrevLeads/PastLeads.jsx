import React from 'react'
import MainCard from '../Leads/LeadCard'
const PastLeads = ({mode, handleLeads}) => {
  return (
    <div name='leads' className={`border-2 m-4 flex flex-col justify-center items-center p-4  gap-4 ${mode ? 'bg-gray-300 text-black' : 'text-white bg-black'}`}>
      <h1 className='font-semibold text-4xl cursor-pointer ' onClick={handleLeads}>PREVIOUS LEADS 2023</h1>
  
        <div className={`p-4 border ${mode ? 'border-black' : 'border-white'} `}>
            <p className="text-lg font-semibold mb-4 text-center mt-8">Executive Leads</p>
            <div className="flex flex-col md:flex-row justify-center  gap-4 items-center md:gap-10 z-10 flex-wrap">
            <MainCard
                mode={mode}
                heading="Samridha Basu Old"
                content="President"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            <MainCard
                mode={mode}
                heading="Archita Sharda old"
                content="Vice President"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            <MainCard
                mode={mode}
                heading="Shreyansh Sharma old"
                content="Executive"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            <MainCard
                mode={mode}
                heading="Tounav Dutta"
                content="Co-Executive"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            </div>
        </div>

        <div className={`p-4 border ${mode ? 'border-black' : 'border-white'} `}>
            <p className="text-lg font-semibold mb-4 text-center mt-8">Technical Leads</p>
            <div className="flex flex-col md:flex-row justify-center  gap-4 items-center md:gap-10 z-10 flex-wrap">
            <MainCard
                mode={mode}
                heading="Vedant Raizada"
                content="Technical Lead"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            <MainCard
                mode={mode}
                heading="Garima Bhandari"
                content="Technical Co-Lead"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            
            <MainCard
                mode={mode}
                heading="Navya Srivastava"
                content="Web Development Lead"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            <MainCard
                mode={mode}
                heading="Satyam Saurav"
                content="App Development Lead"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            <MainCard
                mode={mode}
                heading="Kinshuk Goel"
                content="CP Lead"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            </div>
        </div>

        <div className={`p-4 border ${mode ? 'border-black' : 'border-white'} `}>
            <p className="text-lg font-semibold mb-4 text-center mt-8">Management Leads</p>
            <div className="flex flex-col md:flex-row justify-center  gap-4 items-center md:gap-10 z-10 flex-wrap">
            <MainCard
                mode={mode}
                heading="Jaisheel Nakum"
                content="Lead"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            <MainCard
                mode={mode}
                heading="Abhishek Khare"
                content="Co-Lead"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            </div>
        </div>

        <div className={`p-4 border ${mode ? 'border-black' : 'border-white'} `}>
            <p className="text-lg font-semibold mb-4 text-center mt-8">Creative Leads</p>
            <div className="flex flex-col md:flex-row justify-center  gap-4 items-center md:gap-10 z-10 flex-wrap">
            <MainCard
                mode={mode}
                heading="Ekansh Srivastava"
                content="Lead"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            <MainCard
                mode={mode}
                heading="Himang Bharadwaj"
                content="Co-Lead"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            </div>
        </div>


        <div className={`p-4 border ${mode ? 'border-black' : 'border-white'} `}>
            <p className="text-lg font-semibold mb-4 text-center mt-8">Social Leads</p>
            <div className="flex flex-col md:flex-row justify-center  gap-4 items-center md:gap-10 z-10 flex-wrap">
            <MainCard
                mode={mode}
                heading="Ishika Mittal"
                content="Lead"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            <MainCard
                mode={mode}
                heading="Arya Jha"
                content="Co-Lead"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            </div>
        </div>

        <div className={`p-4 border ${mode ? 'border-black' : 'border-white'} `}>
            <p className="text-lg font-semibold mb-4 text-center mt-8">Content Leads</p>
            <div className="flex flex-col md:flex-row justify-center  gap-4 items-center md:gap-10 z-10 flex-wrap">
            <MainCard
                mode={mode}
                heading="Chithjyot Kaur"
                content="Lead"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            <MainCard
                mode={mode}
                heading="Trupti Sonagra"
                content="Co-Lead"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            </div>
        </div>


        <div className={`p-4 border ${mode ? 'border-black' : 'border-white'} `}>
            <p className="text-lg font-semibold mb-4 text-center mt-8">Publicity/PR Leads</p>
            <div className="flex flex-col md:flex-row justify-center  gap-4 items-center md:gap-10 z-10 flex-wrap">
            <MainCard
                mode={mode}
                heading="Mathew Lewis"
                content="Hello I'm a web developer"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            <MainCard
                mode={mode}
                heading="Tracy Mconald"
                content="Hello I'm a mobile developer"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            </div>
        </div>

        <div className={`p-4 border ${mode ? 'border-black' : 'border-white'} `}>
            <p className="text-lg font-semibold mb-4 text-center mt-8">Photography Leads</p>
            <div className="flex flex-col md:flex-row justify-center  gap-4 items-center md:gap-10 z-10 flex-wrap">
            <MainCard
                mode={mode}
                heading="Mathew Lewis"
                content="Hello I'm a web developer"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            <MainCard
                mode={mode}
                heading="Tracy Mconald"
                content="Hello I'm a mobile developer"
                image="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            />
            </div>
        </div>

        <div className={`p-4 border ${mode ? 'border-black' : 'border-white'} `}>
            <p className="text-lg font-semibold mb-4 text-center mt-8">Treasurer</p>
            <div className="flex flex-col md:flex-row justify-center  gap-4 items-center md:gap-10 z-10 flex-wrap">
            <MainCard
                mode={mode}
                heading="Mathew Lewis"
                content="Hello I'm a web developer"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            </div>
        </div>

        <div className={`p-4 border ${mode ? 'border-black' : 'border-white'} `}>
            <p className="text-lg font-semibold mb-4 text-center mt-8">Exceptional Members</p>
            <div className="flex flex-col md:flex-row justify-center  gap-4 items-center md:gap-10 z-10 flex-wrap">
            <MainCard
                mode={mode}
                heading="Mathew Lewis"
                content="Hello I'm a web developer"
                image="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
            />
            </div>
        </div>

    </div>
  )
}

export default PastLeads