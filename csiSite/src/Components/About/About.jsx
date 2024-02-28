import React from 'react'

const About = ({mode}) => {
  return (
    <div name='about' className={`flex flex-col  border-2 m-4 justify-center items-center p-4 ${mode ? 'bg-gray-300 text-black' : 'text-white bg-black'}`}>
        <h1 className='font-semibold text-4xl '>ABOUT US</h1>
        <div className='m-4 p-2 shadow-2xl'>
            <p className='text-3xl text-center font-bold'>CSI</p>
            <p className='mt-2'>COMPUTER SOCIETY OF INDIA IS A BODY OF COMPUTER PROFESSIONALS IN INDIA. IT WAS STARTED ON 6 MARCH 1965 BY A FEW  COMPUTER PROFESSIONALS AND HAS NOW GROWN TO BE THE NATIONAL BODY REPRESENTING COMPUTER PROFESSIONALS. IT HAS 72 CHAPTERS ACROSS INDIA, 511 STUDENT BRANCHES, AND 100,000 MEMBERS. THE COMPUTER SOCIETY OF INDIA IS A NON-PROFIT PROFESSIONAL MEET TO EXCHANGE VIEWS AND INFORMATION TO LEARN AND SHARE IDEAS. THE SOCIETY ALSO ENCOURAGES AND ASSISTS PROFESSIONALSTO MAINTAIN INTEGRITY AND COMPETENCE OF THE PROFESSION AND FOSTERS A SENSE OF PARTNERSHIP AMONGST MEMBERS. BESIDES THE ACTIVITIES HELD AT THE CHAPTERS AND STUDENT BRANCHES, THE SOCIETY ALSO CONDUCTS PERIODIC CONFERENCES AND SEMINARS. THE SOCIETY FUNCTIONS UNDER THE GUIDANCE OF AN EXECUTIVE COMMITTEE. THE FUNCTIONAL HEAD OF THE SOCIETY IS THE PRESIDENT AND IS ASSISTED BY THE VICE PRESIDENT, EXECUTIVE, CO-EXECUTIVE AND OTHER TEAMS. CSI AIMS TO ADVANCE AND PROMOTE THE SCIENCE AND PRACTICE OF COMPUTING AND IT IN INDIA, AS WELL AS TO FACILITATE COMMUNICATION AND COLLABORATION AMONG ITS MEMBERS. IT PROVIDES A PLATFORM FOR PROFESSIONALS, RESEARCHERS, EDUCATORS, AND STUDENTSTO SHARE THEIR KNOWLEDGE, EXPERIENCES, AND IDEAS THROUGH CONFERENCES, SEMINARS, AND WORKSHOPS.
</p>
        </div>
        <div className='m-4 p-2 shadow-2xl'>
            <p className='text-3xl text-center font-bold'>CSE Department</p>
            <p className='mt-2'>THE CSE DEPARTMENT OF SRMIST, NCR PROVIDES AN OUTSTANDING RESEARCH ENVIRONMENT COMPLEMENTED BY E   XCELLENCE IN TEACHING. THEY PROVIDE A LOT OF OPPORTUNITIES FOR THEIR STUDENTS, LIKE THEY ORGANIZE MANY WORKSHOPS, WEBINARS ETC. THE TRAINING IMPARTED AIMS TO PREPARE YOUNG MINDS FOR THE CHALLENGING OPPORTUNITIES IN THE IT INDUSTRY. THE TEACHERS IN SRM PROVIDE PRACTICAL KNOWLEDGE THAT MAKES THE STUDENTS SUITABLE FOR IT SECTOR JOBS. THE CSE DEPARTMENT IN SRM ALSO MANAGES TO WELCOME MANY BIG COMPANIES FOR THE STUDENTS SO THAT THEY GET PLACED IN A GOOD COMPANY AND THEIR FUTURE IS SECURED.   
</p>
        </div>
        <div className='m-4 p-2 shadow-2xl'>
            <p className='text-3xl text-center font-bold'>SRM</p>
            <p className='mt-2'>SRM INSTITUTE OF SCIENCE AND TECHNOLOGY, GHAZIABAD WAS ESTABLISHED IN THE YEAR 1997 AND HOUSES OVER 5,000 STUDENTS, OVER 200 FACULTIES, AND A PLETHORA OF VISITING FACULTY FROM ACROSS INDUSTRIES. IT IS A PRIVATE UNIVERSITY LOCATED IN GHAZIABAD, UTTAR PRADESH, INDIA. THE UNIVERSITY OFFERS UNDERGRADUATE, POSTGRADUATE, AND DOCTORAL PROGRAMS IN VARIOUS FIELDS SUCH AS ENGINEERING, MANAGEMENT, COMPUTER APPLICATIONS, PHARMACY AND SCIENCES. THE GHAZIABAD CAMPUS OF SRM INSTITUTE OF SCIENCE AND TECHNOLOGY IS SPREAD OVER AN AREA OF 25 ACRES AND IS EQUIPPED WITH MODERN INFRASTRUCTURE, INCLUDING STATE-OF-THE-ART LABORATORIES, LIBRARIES, AND CLASSROOMS. THE CAMPUS HAS A VIBRANT STUDENT COMMUNITY, WITH STUDENTS FROM ALL OVER THE COUNTRY AND THE WORLD. SRM INSTITUTE OF SCIENCE AND TECHNOLOGY, GHAZIABAD CAMPUS ALSO HAS COLLABORATIONS WITH SEVERAL INTERNATIONAL UNIVERSITIES, WHICH ALLOWS STUDENTS TO GAIN A GLOBAL PERSPECTIVE ON THEIR EDUCATION. THE UNIVERSITY ALSO PROVIDES VARIOUS FACILITIES TO ITS STUDENTS, INCLUDING SPORTS FACILITIES, ACCOMMODATION, AND MEDICAL FACILITIES. OVERALL, SRM INSTITUTE OF SCIENCE AND TECHNOLOGY, GHAZIABAD CAMPUS IS A REPUTED INSTITUTION KNOWN FOR ITS QUALITY EDUCATION AND EXCELLENT INFRASTRUCTURE.
</p>
        </div>
    </div>
  )
}

export default About