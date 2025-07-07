import React, { useState } from 'react';
import { CreditCard, Phone, QrCode } from 'lucide-react';

interface FormValues {
  name: string;
  phone: string;
  amount: string;
  customAmount: string;
  paymentMethod: 'bkash' | 'nagad';
  note: string;
}

const presetAmounts = ['100', '200', '500', '1000', '2000',];

const DonationForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    phone: '',
    amount: '',
    customAmount: '',
    paymentMethod: 'bkash',
    note: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // If selecting a preset amount, clear the custom amount
    if (name === 'amount' && value !== 'custom') {
      setFormValues(prev => ({
        ...prev,
        customAmount: ''
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormValues({
          name: '',
          phone: '',
          amount: '',
          customAmount: '',
          paymentMethod: 'bkash',
          note: '',
        });
        setShowQR(false);
      }, 3000);
    }, 1500);
  };
  
  const finalAmount = formValues.amount === 'custom' 
    ? formValues.customAmount 
    : formValues.amount;
    
  const isFormValid = 
    formValues.name.trim() !== '' && 
    formValues.phone.trim() !== '' && 
    finalAmount !== '';

  const getQRImage = () => {
    return formValues.paymentMethod === 'bkash'
      ? 'https://images4.imagebam.com/1c/51/43/ME11HJ1D_o.png'
      : 'https://images4.imagebam.com/e7/13/ac/ME11HJBP_o.png';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-green-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your donation information has been submitted. Please complete your payment via {formValues.paymentMethod}.
            You will receive payment instructions shortly.
          </p>
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-700">Amount: ৳{finalAmount}</p>
            <p className="text-gray-600 text-sm">Method: {formValues.paymentMethod}</p>
          </div>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            Make Another Donation
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Make a Donation</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone size={18} className="text-gray-500" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="01XXX-XXXXXX"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Donation Amount (BDT)
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-2">
                  {presetAmounts.map(amount => (
                    <button
                      key={amount}
                      type="button"
                      className={`py-2 px-4 rounded-md border transition-colors ${
                        formValues.amount === amount
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                          : 'border-gray-300 hover:border-emerald-400'
                      }`}
                      onClick={() => setFormValues(prev => ({
                        ...prev,
                        amount: amount,
                        customAmount: ''
                      }))}
                    >
                      ৳{amount}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`py-2 px-4 rounded-md border transition-colors ${
                      formValues.amount === 'custom'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                        : 'border-gray-300 hover:border-emerald-400'
                    }`}
                    onClick={() => setFormValues(prev => ({
                      ...prev,
                      amount: 'custom'
                    }))}
                  >
                    Custom
                  </button>
                </div>
                
                {formValues.amount === 'custom' && (
                  <input
                    type="number"
                    name="customAmount"
                    value={formValues.customAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter amount"
                    min="100"
                    required
                  />
                )}
              </div>
              
              <div>
                <label htmlFor="paymentMethod" className="block text-gray-700 font-medium mb-1">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label 
                    className={`flex items-center border rounded-md p-3 cursor-pointer transition-colors ${
                      formValues.paymentMethod === 'bkash'
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-300 hover:border-pink-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bkash"
                      checked={formValues.paymentMethod === 'bkash'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="h-10 w-10 bg-pink-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">
                      b
                    </span>
                    <span className="font-medium">bKash</span>
                  </label>
                  
                  <label 
                    className={`flex items-center border rounded-md p-3 cursor-pointer transition-colors ${
                      formValues.paymentMethod === 'nagad'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-300 hover:border-orange-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="nagad"
                      checked={formValues.paymentMethod === 'nagad'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">
                      N
                    </span>
                    <span className="font-medium">Nagad</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label htmlFor="note" className="block text-gray-700 font-medium mb-1">
                  Additional Note (Optional)
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={formValues.note}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Any specific instructions or details"
                ></textarea>
              </div>

              {isFormValid && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowQR(!showQR)}
                    className="w-full mb-4 py-3 px-4 rounded-md font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-center transition-all duration-300"
                  >
                    <QrCode size={18} className="mr-2" />
                    {showQR ? 'Hide QR Code' : 'Show QR Code'}
                  </button>

                  {showQR && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                      <img
                        src={getQRImage()}
                        alt={`${formValues.paymentMethod} QR Code`}
                        className="w-48 h-48 object-contain"
                      />
                      <p className="mt-2 text-sm text-gray-600">
                        Scan with {formValues.paymentMethod} app to pay ৳{finalAmount}
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3 px-4 rounded-md font-medium text-white flex items-center justify-center transition-all duration-300 ${
                    isFormValid
                      ? 'bg-emerald-600 hover:bg-emerald-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard size={18} className="mr-2" />
                      Confirm Donation
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default DonationForm;