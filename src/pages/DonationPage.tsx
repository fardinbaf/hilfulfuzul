import { useEffect } from 'react';
import { Heart, Gift, ShoppingBag, Coffee, Phone, QrCode } from 'lucide-react';
import DonationForm from '../components/DonationForm';

const DonationPage = () => {
  useEffect(() => {
    document.title = "হিলফুল ফুজুল সংঘ - Donation";
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-12">
      {/* Hero Section */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Support Our Cause</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your donation helps us provide assistance to those in need, especially during Eid celebrations.
          </p>
        </div>
      </section>
      
      {/* Donation Impact Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Your Donation Makes a Difference</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Food Packages</h3>
              <p className="text-gray-600">
                Provides essential food items to families during Eid and other occasions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Eid Gifts</h3>
              <p className="text-gray-600">
                Helps provide new clothes and gifts for children during Eid celebrations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Medical Support</h3>
              <p className="text-gray-600">
                Provides medical assistance for those who cannot afford healthcare.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Community Events</h3>
              <p className="text-gray-600">
                Supports community iftar gatherings and other Islamic events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Instructions Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Donation Instructions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* bKash Instructions */}
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                    b
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">bKash Payment</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Account Number</p>
                      <p className="text-gray-600"><b>01909-912916</b></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <QrCode className="w-5 h-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Scan QR Code</p>
                      <p className="text-gray-600">Use bKash app to scan the QR code</p>
                    </div>
                  </div>
                  <div className="bg-pink-100 p-4 rounded-md">
                    <h4 className="font-medium text-gray-800 mb-2">Steps:</h4>
                    <ol className="list-decimal list-inside text-gray-600 space-y-1">
                      <li>Open bKash app or dial *247#</li>
                      <li>Select "Send Money"</li>
                      <li>Enter the account number</li>
                      <li>Enter amount</li>
                      <li>Add your Name in reference</li>
                      <li>Enter your PIN to confirm</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Nagad Instructions */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                    N
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Nagad, Rocket, uPay </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Account Number</p>
                      <p className="text-gray-600"><b>0187-2296477</b></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <QrCode className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Scan QR Code</p>
                      <p className="text-gray-600"><s>Use Nagad app to scan the QR code</s></p>
                    </div>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-md">
                    <h4 className="font-medium text-gray-800 mb-2">Steps:</h4>
                    <ol className="list-decimal list-inside text-gray-600 space-y-1">
                      <li>Open Nagad app or dial *167#</li>
                      <li>Select "Send Money"</li>
                      <li>Enter the account number</li>
                      <li>Enter amount</li>
                      <li>Add your Name reference</li>
                      <li>Enter your PIN to confirm</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Make a Donation</h2>
            <p className="text-gray-600">
              সমস্ত অনুদান ব্যক্তিগত নগদ বা বিকাশ অ্যাকাউন্টের মাধ্যমে নিরাপদে প্রক্রিয়াজাত করা হয়। আপনার তথ্য চাইলে গোপন রাখা হবে এবং শুধুমাত্র আপনার অনুদান প্রক্রিয়াকরণের জন্য ব্যবহার করা হবে।
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <DonationForm />
          </div>
        </div>
      </section>
      
      {/* Transparency Notice */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Commitment to Transparency</h3>
            <p className="text-gray-600 mb-4">
              হিলফুল ফুজুল সংঘে, আমরা আমাদের কার্যক্রমে স্বচ্ছতার জন্য প্রতিশ্রুতিবদ্ধ। সমস্ত অনুদান ট্র্যাক করা হয় এবং শুধুমাত্র দাতব্য উদ্দেশ্যে ব্যবহার করা হয়।
            </p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">How We Use Your Donations:</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>আপনি মোট অনুদানের হিসাব পাবেন</li>
                <li>মোট পরিবারের সহায়তার হিসাব পাবেন</li>
                <li>মোট ব্যায়ের হিসাব পাবেন</li>
                <li>ফান্ডের স্বচ্ছতা পাবেন</li>
                <li>আপনার মতামতের মূল্যায়ন করা হয়</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;