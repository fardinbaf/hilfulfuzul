import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Users, Award, Calendar } from 'lucide-react';
import Slideshow from '../components/Slideshow';
import EventNotice from '../components/EventNotice';
import RecentEvents from '../components/RecentEvents';
import { store, Stats } from '../data/store';

const HomePage = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    document.title = "হিলফুল ফুজুল সংঘ - Home";
    setStats(store.getStats());
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Slideshow */}
      <section className="relative">
        <Slideshow />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            হিলফুল ফুজুল সংঘ
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md">
            একসাথে এগিয়ে, সাহায্যের হাত বাড়িয়ে, আলহামদুলিল্লাহ!
          </p>
          <NavLink 
            to="/donation" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 transform hover:scale-105"
          >
            Donate Now
          </NavLink>
        </div>
      </section>

      {/* Event Notice */}
      <EventNotice />

      {/* Stats Section */}
      {stats && (
        <section className="py-12 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stats.familiesHelped}+</h3>
                <p className="text-gray-600">Families Helped</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stats.yearsOfService}+</h3>
                <p className="text-gray-600">Years of Service</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stats.activeVolunteers}+</h3>
                <p className="text-gray-600">Active Volunteers</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stats.projectsCompleted}+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              হিলফুল ফুজুল সংঘ, সমাজের হত দরিদ্রদের সাহায্য সহযোগিতা, বিশেষ করে প্রতি বছর ২ ঈদে ঈদের আনন্দ ভাগাভাগি করি আপনার আমার সামান্য অনুদান দিয়ে।
              < br></br>< br></br>
              আমাদের সংস্থা আপনার আমার মত দাতাদের কাছ থেকে তহবিল সংগ্রহ করে এবং নিশ্চিত করে যে তারা আমাদের সম্প্রদায়ের সবচেয়ে ঝুঁকিপূর্ণদের কাছে পৌঁছায় এবং কোনরকম লোক দেখানো ফটোশুট এবং ছবি তোলা হয় না।
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images4.imagebam.com/18/ff/0f/ME11IW67_o.jpeg" 
                alt="Community Support" 
                className="rounded-lg shadow-lg w-full h-[350px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Who We Are</h3>
                <p className="text-gray-600">
                  হিলফুল ফুজুল সংঘ হল একটি ছোট ইসলামী সংগঠন যা একদল তরুণ দ্বারা প্রতিষ্ঠিত যারা তাদের সম্প্রদায়ের মধ্যে একটি পরিবর্তন আনতে চেয়েছেন। আমরা স্বচ্ছতা এবং নিষ্ঠার সাথে কাজ করি, আপনার আমার দেওয়া প্রতিটি অনুদান কার্যকরভাবে ব্যবহার করা নিশ্চিত করি।
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">What We Do</h3>
                <p className="text-gray-600">
                  আমরা ব্যক্তিগত নগদ, বিকাশ অ্যাকাউন্টের মাধ্যমে তহবিল সংগ্রহ করি এবং বিভিন্ন অনুষ্ঠানে সাহায্য বিতরণ করি, বিশেষ করে ঈদ উদযাপনের সময়। আমরা ব্যক্তিগত নগদ এবং বিকাশ অ্যাকাউন্টের মাধ্যমে তহবিল সংগ্রহ করি এবং বিভিন্ন অনুষ্ঠানে সাহায্য বিতরণ করি, বিশেষ করে ঈদ উদযাপনের সময়।
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Impact</h3>
                <p className="text-gray-600">
                  আমাদের সাহায্যের মধ্যে রয়েছে "এসো ঈদ আনন্দ ভাগ করি" প্যাকেজ এবং আর্থিক সহায়তা।বছরের বছর আমরা বিশেষ করে প্রতি বছর দুই ঈদে আমাদের উপর আমাদের সমাজের, এলাকার হক আদায় হিসাবে আমরা যারা অসহায়, দুঃস্থদের মুখে সামান্য হলেও হাসি ফোটানোর চেষ্টা করি।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <RecentEvents />

      {/* Call to Action */}
      <section className="py-12 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            আপনার অবদান, যতই ছোট হোক না কেন, তা একত্রে সমাজের অনেক বড় কাজে সাহায্য করে, অনেকের সামান্য হলেও উপকার করে এবং এটাই আমাদের স্বার্থকতা। 
            এই নেক কাজে আপনিও হতে পারেন আমাদের সংগী।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink 
              to="/donation" 
              className="bg-white text-emerald-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Donate Now
            </NavLink>
            <NavLink 
              to="https://chat.whatsapp.com/DQ1YW290uXqDGKb05x8SoP" 
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Join With Us
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
