import { Calendar } from 'lucide-react';
import { useData } from '../context/DataContext';

const RecentEvents = () => {
  const { events } = useData();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at our recent activities and the impact we've made in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={event.image_url}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-emerald-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <h3 className={`text-xl font-bold text-gray-800 mb-2 ${event.isPast ? 'line-through' : ''}`}>
                  {event.title}
                </h3>
                <p className={`text-gray-600 ${event.isPast ? 'line-through' : ''}`}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
