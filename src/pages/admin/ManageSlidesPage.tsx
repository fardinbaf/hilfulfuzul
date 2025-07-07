import { useState } from 'react';
import { useData, Slide } from '../../context/DataContext';
import { Plus, Edit, Trash2 } from 'lucide-react';

const ManageSlidesPage = () => {
  const { slides, setSlides } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (slide: Slide | null = null, index: number | null = null) => {
    setCurrentSlide(slide);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSlide(null);
    setCurrentIndex(null);
  };

  const handleSave = (slideData: Slide) => {
    if (currentSlide && currentIndex !== null) {
        const newSlides = [...slides];
        newSlides[currentIndex] = slideData;
        setSlides(newSlides);
    } else {
      setSlides([...slides, slideData]);
    }
    closeModal();
  };

  const handleDelete = (index: number) => {
    if (window.confirm('Are you sure you want to delete this slide?')) {
      setSlides(slides.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Slides</h1>
        <button onClick={() => openModal()} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md flex items-center">
          <Plus size={18} className="mr-2" />
          Add Slide
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Caption</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {slides.map((slide, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <img src={slide.url} alt={slide.caption} className="h-12 w-20 object-cover rounded"/>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{slide.caption}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => openModal(slide, index)} className="text-emerald-600 hover:text-emerald-900 mr-4"><Edit size={18} /></button>
                  <button onClick={() => handleDelete(index)} className="text-red-600 hover:text-red-900"><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && <SlideModal slide={currentSlide} onSave={handleSave} onClose={closeModal} />}
    </div>
  );
};

const SlideModal = ({ slide, onSave, onClose }: { slide: Slide | null, onSave: (data: Slide) => void, onClose: () => void }) => {
    const [formData, setFormData] = useState({
        url: slide?.url || '',
        caption: slide?.caption || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">{slide ? 'Edit Slide' : 'Add Slide'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded" required />
                    <input type="text" name="caption" value={formData.caption} onChange={handleChange} placeholder="Caption" className="w-full p-2 border rounded" required />
                    <div className="flex justify-end space-x-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManageSlidesPage;
