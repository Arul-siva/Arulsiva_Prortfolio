import React, { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(1);

  const faqs = [
    {
      id: 1,
      question: "How much notice period do you have?",
      answer: "My notice period is 30 days / immediate. I'm flexible and open to discussion based on the company's requirements."
    },
    {
      id: 2,
      question: "What is your current CTC / salary expectation?",
      answer: "My current CTC is ₹3.6LPA, and my expected CTC is ₹6LPA, which is negotiable based on the role, responsibilities, and overall compensation structure."
    },
    {
      id: 3,
      question: " Are you open to relocation or remote work?",
      answer: "Yes, I'm open to remote / hybrid / relocation opportunities, depending on the role and company culture."
    },
    {
      id: 4,
      question: " What is your availability for interviews?",
      answer: "I'm generally available on weekdays and can adjust my schedule with prior notice to accommodate interview timings."
    },
    {
      id: 5,
      question: "Are you open to learning new technologies",
      answer: "Absolutely. I believe continuous learning is essential in tech, and I actively upskill myself based on project needs and industry trends."
    },
    {
      id:6,
      question: "What technologies do you work with?",
      answer: "I work with modern web technologies including HTML, CSS, JavaScript, and frameworks or libraries such as React / Next.js / Node.js (adjust based on your stack). I also have experience with APIs, databases, version control (Git), and deployment workflows."
    }
  ];

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="row items-start align-items-center">
          <div className="col-md-5 col-sm-6 col-12">
              {/* Left Side - Contact Card */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8  border-gray-700/50" style={{background:'#FFFFFF0A'}}>
            <div className="text-center mb-8">
              <div className=" mb-6  flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M25.7147 42.8594H20.0004C16.8445 42.8594 14.2861 45.4177 14.2861 48.5737V71.4308C14.2861 74.5867 16.8445 77.1451 20.0004 77.1451H25.7147C28.8706 77.1451 31.429 74.5867 31.429 71.4308V48.5737C31.429 45.4177 28.8706 42.8594 25.7147 42.8594Z" stroke="url(#paint0_linear_362_2743)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M59.9999 42.8594H54.2856C51.1297 42.8594 48.5713 45.4177 48.5713 48.5737V71.4308C48.5713 74.5867 51.1297 77.1451 54.2856 77.1451H59.9999C63.1558 77.1451 65.7141 74.5867 65.7141 71.4308V48.5737C65.7141 45.4177 63.1558 42.8594 59.9999 42.8594Z" stroke="url(#paint1_linear_362_2743)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.85742 54.2879V40.0022C2.85742 30.1513 6.77068 20.7039 13.7363 13.7383C20.702 6.77263 30.1494 2.85938 40.0003 2.85938C49.8512 2.85938 59.2986 6.77263 66.2642 13.7383C73.2299 20.7039 77.1431 30.1513 77.1431 40.0022V54.2879" stroke="url(#paint2_linear_362_2743)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_362_2743" x1="31.4246" y1="42.8825" x2="9.96044" y2="45.8498" gradientUnits="userSpaceOnUse"><stop stop-color="#F0FF6C"></stop><stop offset="1" stop-color="#6BFDD9"></stop></linearGradient><linearGradient id="paint1_linear_362_2743" x1="65.7098" y1="42.8825" x2="44.2456" y2="45.8498" gradientUnits="userSpaceOnUse"><stop stop-color="#F0FF6C"></stop><stop offset="1" stop-color="#6BFDD9"></stop></linearGradient><linearGradient id="paint2_linear_362_2743" x1="77.1243" y1="2.89403" x2="-4.62576" y2="35.5429" gradientUnits="userSpaceOnUse"><stop stop-color="#F0FF6C"></stop><stop offset="1" stop-color="#6BFDD9"></stop></linearGradient></defs></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                You have different questions? Ask Away!
              </h3>
              {/* <p className="text-gray-400 mb-6">
                Work With People And Brands Worldwide.
              </p> */}
              <button
                type="button"
                onClick={scrollToContactForm}
                className="bg-gradient-to-r from-accent to-green-400 text-primary2 font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              >
                Contact Us Now
              </button>
            </div>
          </div>
          </div>
          <div className="col-md-7 col-sm-6 col-12">
             {/* Right Side - FAQ */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-accent font-medium">Have Questions? I've Got Answers</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
               Details about my role, 
                <span className="bg-gradient-to-r from-accent to-green-400 bg-clip-text text-transparent">
                  availability, and experience
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-700/50 rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-sm"
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-liner"
                  >
                    <span className="text-white font-medium text-lg">
                      {faq.question}
                    </span>
                    <div className={`transform transition-all duration-400 ease-in-out ${openQuestion === faq.id ? 'rotate-45' : ''}`}>
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      openQuestion === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="transform transition-all duration-500 ease-out delay-100">
                      <div className=" rounded-xl p-4  active-faq border-accent">
                        <p className=" leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

        

         

        </div>
      </div>
    </section>
  );
};

export default FAQ;
