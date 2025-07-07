import { useState } from 'react';
import { useData, Event } from '../../context/DataContext';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

type EventFormData = Omit<Event, 'id' | 'created_at'>;

const ManageEventsPage = () => {
  const { events, addEvent, updateEvent, deleteEvent } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);

  const openModal = (event: Event | null = null) => {
    setCurrentEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentEvent(null);
  };

  const handleSave = async (eventData: EventFormData) => {
    const promise = currentEvent
      ? updateEvent(currentEvent.id, eventData)
      : addEvent(eventData);

    toast.promise(promise, {
      loading: 'Saving event...',
      success: `Event ${currentEvent ? 'updated' : 'added'} successfully!`,
      error: `Failed to save event.`,
    });
    
    promise.then(closeModal).catch(() => {});
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      const promise = deleteEvent(id);
      toast.promise(promise, {
        loading: 'Deleting event...',
        success: 'Event deleted successfully!',
        error: 'Failed to delete event.',
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Events</h1>
        <button onClick={() => openModal()} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md flex items-center">
          <Plus size={18} className="mr-2" />
          Add Event
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map(event => (
              <tr key={event.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{event.title}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{event.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${event.isPast ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {event.isPast ? 'Past' : 'Upcoming'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => openModal(event)} className="text-emerald-600 hover:text-emerald-900 mr-4"><Edit size={18} /></button>
                  <button onClick={() => handleDelete(event.id)} className="text-red-600 hover:text-red-900"><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && <EventModal event={currentEvent} onSave={handleSave} onClose={closeModal} />}
    </div>
  );
};

const EventModal = ({ event, onSave, onClose }: { event: Event | null, onSave: (data: EventFormData) => void, onClose: () => void }) => {
    const [formData, setFormData] = useState<EventFormData>({
        title: event?.title || '',
        description: event?.description || '',
        date: event?.date || '',
        image_url: event?.image_url || '',
        isPast: event?.isPast || false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">{event ? 'Edit Event' : 'Add Event'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" required />
                    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
                    <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded" required />
                    <label className="flex items-center">
                        <input type="checkbox" name="is_past" checked={formData.is_past || false} onChange={handleChange} className="mr-2" />
                        Is this a past event?
                    </label>
                    <div className="flex justify-end space-x-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManageEventsPage;
