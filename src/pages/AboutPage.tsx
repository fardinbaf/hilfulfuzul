import { useEffect } from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "হিলফুল ফুজুল সংঘ - About Us";
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-12">
      {/* Hero Section */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">হিলফুল ফুজুল সংঘ সম্পর্কে</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learning about our journey, mission, and the impact we've made together.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                হিলফুল ফুজুল সংঘ ২০১৯ সালে কয়েকজন তরুনদের নিয়ে গঠিত হয়েছিলো যারা মনে করেন সমাজের নিকট তাদের কিছু করার হক আছে ।
               
                প্রাথমিক ইসলামী ইতিহাসের ঐতিহাসিক "হিলফ আল-ফুদুল" (ধর্মীয় লীগ) দ্বারা অনুপ্রাণিত হয়ে, যা দুর্বল ও নিপীড়িতদের অধিকার রক্ষার জন্য গঠিত হয়েছিল, আমাদের সংগঠনটি আমাদের সম্প্রদায়ের মধ্যে একই ধরণের লক্ষ্যে প্রতিশ্রুতিবদ্ধ।
              </p>
              <p className="text-gray-600">
                প্রতিবছর প্রতি ঈদের সময়, তাছাড়া করোনার সময় খাদ্য প্যাকেজ সরবরাহের জন্য একটি ছোট উদ্যোগ হিসেবে যা শুরু হয়েছিল তা এখন একটি ব্যাপক সহায়তা ব্যবস্থায় পরিণত হয়েছে যা বছরব্যাপী পরিচালিত হয়, বিশেষ করে ঈদ উদযাপনের উপর। আমাদের নাম, হিলফুল ফুজুল সংঘ, সদাচার, ন্যায়বিচার এবং সম্প্রদায়ের সহায়তার প্রতি আমাদের অঙ্গীকারকে প্রতিনিধিত্ব করে।
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Team" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 text-lg">
              We are guided by Islamic principles of charity, compassion, and community service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide support and assistance to those in need, ensuring everyone can celebrate Eid and other occasions with dignity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We approach our work with empathy and understanding, recognizing the dignity of every individual we serve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in the power of community and work together to create positive change for those in need.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency and accountability, ensuring that all donations are used effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg">
              Meet the dedicated individuals who make our work possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images4.imagebam.com/9a/b7/d9/ME11HPWK_o.png" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Fardin Islam</h3>
                <p className="text-emerald-600 font-medium mb-3">Entrepreneur</p>
                <p className="text-gray-600">
                  With the help of other team members, Fardin established this  organization with vision and compassion, ensuring we stay true to our mission.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images4.imagebam.com/13/cc/da/ME11HQSE_o.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Md Shohag Hossain</h3>
                <p className="text-emerald-600 font-medium mb-3">First-rate Entrepreneur</p>
                <p className="text-gray-600">
                  Shohag oversees our aid distribution and ensures that resources reach those who need them most.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images4.imagebam.com/13/d6/40/ME11HQSG_o.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Md Juel Hossain</h3>
                <p className="text-emerald-600 font-medium mb-3">First-rate Entrepreneur</p>
                <p className="text-gray-600">
                  Juel manages our volunteer team and coordinates community outreach efforts.
                </p>
              </div>
            </div>
          </div>
          <br></br>    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images4.imagebam.com/f1/49/c4/ME11HRHF_o.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Md Nahid Hossain</h3>
                <p className="text-emerald-600 font-medium mb-3">Ex Cashier & Manager</p>
                <p className="text-gray-600">
                  Till 2024 Riad Uddin Nahid's effort for this org was exceptional. Only he collects the funds, bought goods, managed all the distribution things.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images4.imagebam.com/fd/e6/3e/ME11HRHE_o.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Md A. Ahad</h3>
                <p className="text-emerald-600 font-medium mb-3">Cashier & Manager</p>
                <p className="text-gray-600">
                  Abdul Ahad is our current Cashier and Manager, who will manage most of the collection and distribution tasks. 
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/8193858/pexels-photo-8193858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Saimon Siddique</h3>
                <p className="text-emerald-600 font-medium mb-3">Software Developer</p>
                <p className="text-gray-600">
                  Saimon Siddique manages our volunteer team and coordinates community outreach efforts.
                </p>
              </div>
            </div>
          </div> 
          
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Whether through donation or volunteering, you can help us make a difference in our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink 
              to="/donation" 
              className="bg-white text-emerald-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Donate Now
            </NavLink>
            <NavLink 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;