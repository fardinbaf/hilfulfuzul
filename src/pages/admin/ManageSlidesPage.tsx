import React, { useState } from 'react';
import { store, Slide } from '../../data/store';
import { Plus, Edit, Trash, Save, X } from 'lucide-react';
import { nanoid } from 'nanoid';

const ManageSlidesPage = () => {
  const [slides, setSlides] = useState<Slide[]>(store.getSlides());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<Partial<Slide> | null>(null);

  const openModal = (slide: Partial<Slide> | null = null) => {
    setCurrentSlide(slide ? { ...slide } : { id: '', url: '', caption: '' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSlide(null);
  };

  const handleSave = () => {
    if (!currentSlide || !currentSlide.url || !currentSlide.caption) return;
    
    let updatedSlides;
    if (currentSlide.id) { // Editing existing
      updatedSlides = slides.map(s => s.id === currentSlide.id ? currentSlide as Slide : s);
    } else { // Adding new
      const newSlide = { ...currentSlide, id: nanoid() } as Slide;
      updatedSlides = [...slides, newSlide];
    }
    
    setSlides(updatedSlides);
    store.saveSlides(updatedSlides);
    closeModal();
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this slide?')) {
      const updatedSlides = slides.filter(s => s.id !== id);
      setSlides(updatedSlides);
      store.saveSlides(updatedSlides);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Slideshow</h1>
        <button onClick={() => openModal()} className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
          <Plus className="w-5 h-5 mr-2" /> Add Slide
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <ul className="space-y-4">
          {slides.map(slide => (
            <li key={slide.id} className="flex items-center justify-between p-4 border rounded-md">
              <div className="flex items-center">
                <img src={slide.url} alt={slide.caption} className="w-20 h-12 object-cover rounded-md mr-4" />
                <span className="font-medium">{slide.caption}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => openModal(slide)} className="p-2 text-blue-600 hover:text-blue-800">
                  <Edit className="w-5 h-5" />
                </button>
                <button onClick={() => handleDelete(slide.id)} className="p-2 text-red-600 hover:text-red-800">
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && currentSlide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{currentSlide.id ? 'Edit Slide' : 'Add New Slide'}</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Image URL" value={currentSlide.url} onChange={e => setCurrentSlide({...currentSlide, url: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
              <input type="text" placeholder="Caption" value={currentSlide.caption} onChange={e => setCurrentSlide({...currentSlide, caption: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button onClick={closeModal} className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                <X className="w-5 h-5 mr-2" /> Cancel
              </button>
              <button onClick={handleSave} className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                <Save className="w-5 h-5 mr-2" /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageSlidesPage;
