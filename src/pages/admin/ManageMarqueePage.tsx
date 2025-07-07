import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, Trash2 } from 'lucide-react';

const ManageMarqueePage = () => {
  const { marqueeText, setMarqueeText } = useData();
  const [texts, setTexts] = useState([...marqueeText]);

  const handleSave = () => {
    setMarqueeText(texts.filter(t => t.trim() !== ''));
    alert('Marquee text updated successfully!');
  };

  const handleChange = (index: number, value: string) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setTexts(newTexts);
  };

  const addText = () => {
    setTexts([...texts, '']);
  };

  const removeText = (index: number) => {
    setTexts(texts.filter((_, i) => i !== index));
  };


  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Marquee Text</h1>
        <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-md"
        >
            Save Changes
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {texts.map((text, index) => (
            <div key={index} className="flex items-center space-x-2">
              <textarea
                rows={2}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                value={text}
                onChange={(e) => handleChange(index, e.target.value)}
              />
              <button onClick={() => removeText(index)} className="text-red-500 hover:text-red-700 p-2">
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          <button onClick={addText} className="text-emerald-600 hover:text-emerald-800 font-medium py-2 px-4 rounded-md border border-emerald-600 flex items-center">
            <Plus size={18} className="mr-2" />
            Add Notice
          </button>
          
          <p className="mt-2 text-sm text-gray-500">These texts will scroll across the top of the homepage in sequence.</p>

        </div>
      </div>
    </div>
  );
};

export default ManageMarqueePage;
