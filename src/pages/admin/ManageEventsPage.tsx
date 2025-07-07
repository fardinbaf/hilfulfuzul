import React, { useState } from 'react';
import { store, Event } from '../../data/store';
import { Plus, Edit, Trash, Save, X } from 'lucide-react';
import { nanoid } from 'nanoid';

const ManageEventsPage = () => {
  const [events, setEvents] = useState<Event[]>(store.getEvents());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Partial<Event> | null>(null);

  const openModal = (event: Partial<Event> | null = null) => {
    setCurrentEvent(event ? { ...event } : { id: '', title: '', description: '', date: '', image_url: '' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentEvent(null);
  };

  const handleSave = () => {
    if (!currentEvent || !currentEvent.title || !currentEvent.date || !currentEvent.image_url) return;
    
    let updatedEvents;
    if (currentEvent.id) {
      updatedEvents = events.map(e => e.id === currentEvent.id ? currentEvent as Event : e);
    } else {
      const newEvent = { ...currentEvent, id: nanoid() } as Event;
      updatedEvents = [...events, newEvent];
    }
    
    setEvents(updatedEvents);
    store.saveEvents(updatedEvents);
    closeModal();
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      const updatedEvents = events.filter(e => e.id !== id);
      setEvents(updatedEvents);
      store.saveEvents(updatedEvents);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Events</h1>
        <button onClick={() => openModal()} className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
          <Plus className="w-5 h-5 mr-2" /> Add Event
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="border rounded-lg overflow-hidden">
              <img src={event.image_url} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500">{event.date}</p>
                <h3 className="font-bold text-lg mt-1">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-2 h-20 overflow-hidden">{event.description}</p>
              </div>
              <div className="flex items-center justify-end p-2 bg-gray-50 space-x-2">
                <button onClick={() => openModal(event)} className="p-2 text-blue-600 hover:text-blue-800">
                  <Edit className="w-5 h-5" />
                </button>
                <button onClick={() => handleDelete(event.id)} className="p-2 text-red-600 hover:text-red-800">
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && currentEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg max-h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{currentEvent.id ? 'Edit Event' : 'Add New Event'}</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Title" value={currentEvent.title} onChange={e => setCurrentEvent({...currentEvent, title: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
              <input type="date" placeholder="Date" value={currentEvent.date} onChange={e => setCurrentEvent({...currentEvent, date: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
              <input type="text" placeholder="Image URL" value={currentEvent.image_url} onChange={e => setCurrentEvent({...currentEvent, image_url: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
              <textarea placeholder="Description" value={currentEvent.description} onChange={e => setCurrentEvent({...currentEvent, description: e.target.value})} className="w-full px-4 py-2 border rounded-md" rows={4}></textarea>
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

export default ManageEventsPage;
