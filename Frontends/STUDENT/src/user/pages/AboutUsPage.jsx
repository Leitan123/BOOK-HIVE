import { useState } from "react";
import { Users, BookOpen, GraduationCap, Award, Building, Globe, Clock } from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About BookWise</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering students and educators with comprehensive resources and innovative learning solutions since 1995.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="container mx-auto my-8">
        <div className="flex justify-center mb-6">
          <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
            <button 
              className={`px-6 py-3 ${activeTab === "mission" ? "bg-amber-500 text-white" : "hover:bg-gray-100"}`}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </button>
            <button 
              className={`px-6 py-3 ${activeTab === "story" ? "bg-amber-500 text-white" : "hover:bg-gray-100"}`}
              onClick={() => setActiveTab("story")}
            >
              Our Story
            </button>
            <button 
              className={`px-6 py-3 ${activeTab === "team" ? "bg-amber-500 text-white" : "hover:bg-gray-100"}`}
              onClick={() => setActiveTab("team")}
            >
              Our Team
            </button>
            <button 
              className={`px-6 py-3 ${activeTab === "services" ? "bg-amber-500 text-white" : "hover:bg-gray-100"}`}
              onClick={() => setActiveTab("services")}
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          {activeTab === "mission" && (
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
                <p className="mb-4">
                  At BookWise, our mission is to unlock the potential of every learner through accessible, innovative, and 
                  comprehensive educational resources. We believe that quality education should be available to everyone, 
                  regardless of their background or circumstances.
                </p>
                <p className="mb-4">
                  Our vision is to create a global learning community where knowledge is shared freely, education is personalized, 
                  and every student has the tools they need to succeed in their academic journey and beyond.
                </p>
                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">Accessible Education</h3>
                      <p>Making quality educational resources available to all students regardless of location or background</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">Personalized Learning</h3>
                      <p>Tailoring educational experiences to meet the unique needs and learning styles of each student</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                      <Award size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">Excellence in Education</h3>
                      <p>Maintaining the highest standards of academic quality and pedagogical innovation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src= "/images/book-shelf.jpg"
                  alt="Students in library" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          )}

          {activeTab === "story" && (
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <p className="mb-4">
                    Founded in 1995, BookWise began as a small collection of educational resources aimed at helping undergraduate 
                    students excel in their academic pursuits. What started as a passion project by a group of dedicated educators 
                    has grown into a comprehensive learning management system trusted by educational institutions worldwide.
                  </p>
                  <p className="mb-4">
                    Through the years, we've evolved with the changing educational landscape, embracing technological advancements 
                    and innovative teaching methodologies. Our journey has been marked by a consistent commitment to excellence and 
                    a deep understanding of the needs of both students and educators.
                  </p>
                  <p>
                    Today, BookWise serves over 750,000 students and 30,000 educators across 1,900 institutions globally. Our comprehensive 
                    library of resources, lecture help, study mentors, and Wi-Fi access has made us a leader in educational technology, 
                    but our core mission remains unchanged: to inspire and empower through education.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Our Milestones</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="font-bold text-amber-600 w-20">1995</div>
                        <div>BookWise founded as a resource collection for undergraduate students</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="font-bold text-amber-600 w-20">2003</div>
                        <div>Launched our first digital learning platform</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="font-bold text-amber-600 w-20">2010</div>
                        <div>Expanded internationally, opening educational hubs in 12 countries</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="font-bold text-amber-600 w-20">2015</div>
                        <div>Developed comprehensive LMS with integrated learning tools</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="font-bold text-amber-600 w-20">2019</div>
                        <div>Reached milestone of supporting 500,000 students globally</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="font-bold text-amber-600 w-20">2023</div>
                        <div>Launched advanced personalized learning algorithms</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="font-bold text-amber-600 w-20">Today</div>
                        <div>Serving 750,000+ students with comprehensive educational solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                <p className="max-w-2xl mx-auto">
                  Our team consists of passionate educators, technology experts, and educational researchers dedicated to 
                  transforming the learning experience. Each member brings unique expertise and a shared commitment to our mission.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Dr. Amanda Chen",
                    role: "Chief Educational Officer",
                    bio: "With over 15 years in educational research, Dr. Chen leads our pedagogical approach and content development.",
                    image: "/api/placeholder/200/200"
                  },
                  {
                    name: "Michael Rodriguez",
                    role: "Head of Technology",
                    bio: "Michael brings 12 years of experience in educational technology and leads our platform development.",
                    image: "/api/placeholder/200/200"
                  },
                  {
                    name: "Dr. Sarah Johnson",
                    role: "Research Director",
                    bio: "A specialist in learning psychology, Dr. Johnson ensures our methods are backed by educational science.",
                    image: "/api/placeholder/200/200"
                  },
                  {
                    name: "James Wilson",
                    role: "Content Development Lead",
                    bio: "Former professor with expertise in creating engaging and effective educational materials.",
                    image: "/api/placeholder/200/200"
                  },
                  {
                    name: "Priya Patel",
                    role: "Student Success Manager",
                    bio: "Dedicated to ensuring students get the most from our platform through support and training.",
                    image: "/api/placeholder/200/200"
                  },
                  {
                    name: "David Thompson",
                    role: "International Programs Director",
                    bio: "Coordinates our global educational initiatives and partnerships with institutions worldwide.",
                    image: "/api/placeholder/200/200"
                  }
                ].map((member, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full mb-4 object-cover"
                    />
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-amber-600 mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
                <p className="max-w-2xl mx-auto mb-6">
                  We're always looking for passionate educators and innovators to join our mission. 
                  If you're dedicated to transforming education and making a difference in students' lives, we'd love to hear from you.
                </p>
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md">
                  View Open Positions
                </button>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Our EduKation Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <BookOpen size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Resource Banks</h3>
                  </div>
                  <p>
                    Our comprehensive library contains over 500,000 resources carefully curated to support your academic journey.
                    Access textbooks, research papers, case studies, lecture notes, and practice exercises across disciplines.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <Users size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Lecture Help</h3>
                  </div>
                  <p>
                    Connect with experienced educators for personalized academic support. Our lecture help service provides
                    clarification on complex topics, additional examples, and conceptual explanations to enhance your understanding.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <GraduationCap size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Study Mentors</h3>
                  </div>
                  <p>
                    Our qualified mentors provide guidance for effective learning techniques, time management strategies, and
                    exam preparation. Get personalized study plans and regular check-ins to stay on track with your academic goals.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Free Wi-Fi</h3>
                  </div>
                  <p>
                    Access our resources anywhere with our dedicated network of Wi-Fi hotspots. We've partnered with libraries,
                    campuses, and study centers worldwide to ensure you're always connected to the resources you need.
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-50 p-8 rounded-lg">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">International Educational Hubs</h3>
                    <p className="mb-4">
                      Our global network of educational hubs provides physical spaces for collaborative learning, resource access,
                      and in-person mentoring. Located in 30+ countries, these centers serve as community gathering points for
                      BookWise users and educational partners.
                    </p>
                    <p className="mb-6">
                      Each hub is equipped with high-speed internet, study spaces, reference libraries, and regular workshops
                      conducted by educational experts. They serve as bridges between digital learning and traditional academic support.
                    </p>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded">Find a Hub Near You</button>
                  </div>
                  <div className="lg:w-1/3">
                    <img 
                      src="/api/placeholder/400/300" 
                      alt="Educational Hub" 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 text-white py-16 mt-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-amber-500 p-4 rounded-full mb-4">
                <BookOpen size={28} />
              </div>
              <div className="text-4xl font-bold">500</div>
              <div className="text-gray-300">Resources</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-amber-500 p-4 rounded-full mb-4">
                <Building size={28} />
              </div>
              <div className="text-4xl font-bold">1900</div>
              <div className="text-gray-300">Universities</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-amber-500 p-4 rounded-full mb-4">
                <Users size={28} />
              </div>
              <div className="text-4xl font-bold">750K</div>
              <div className="text-gray-300">Students Served</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-amber-500 p-4 rounded-full mb-4">
                <Globe size={28} />
              </div>
              <div className="text-4xl font-bold">30</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto my-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "BookWise transformed my academic experience. The resources are comprehensive and the lecture help made complex subjects approachable.",
              author: "Sarah K.",
              role: "Engineering Student",
              university: "MIT"
            },
            {
              quote: "As an educator, I've found BookWise to be an invaluable tool for supplementing my teaching materials and providing additional support to my students.",
              author: "Prof. James Wilson",
              role: "Professor of Economics",
              university: "Stanford University"
            },
            {
              quote: "The study mentors provided exactly the guidance I needed to improve my study habits and achieve better results in my courses.",
              author: "Michael T.",
              role: "Business Student",
              university: "London School of Economics"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-amber-500">★</span>
                ))}
              </div>
              <p className="italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-gray-600">{testimonial.university}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Educational Partners</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-40 h-20">
                <div className="text-gray-400 text-lg font-bold">Partner Logo</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Educational Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students and educators who are already benefiting from our comprehensive educational resources and services.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-amber-600 px-6 py-3 rounded-md font-bold hover:bg-gray-100">
              Explore Resources
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-md font-bold hover:bg-gray-900">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}