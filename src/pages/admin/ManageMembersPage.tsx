import React, { useState } from 'react';
import { store, Member } from '../../data/store';
import { Plus, Edit, Trash, Save, X } from 'lucide-react';
import { nanoid } from 'nanoid';

const ManageMembersPage = () => {
  const [members, setMembers] = useState<Member[]>(store.getMembers());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState<Partial<Member> | null>(null);

  const openModal = (member: Partial<Member> | null = null) => {
    setCurrentMember(member ? { ...member } : { id: '', name: '', phone: '' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMember(null);
  };

  const handleSave = () => {
    if (!currentMember || !currentMember.name || !currentMember.phone) return;
    
    let updatedMembers;
    if (currentMember.id) { // Editing existing
      updatedMembers = members.map(m => m.id === currentMember.id ? currentMember as Member : m);
    } else { // Adding new
      const newMember = { ...currentMember, id: nanoid() } as Member;
      updatedMembers = [...members, newMember];
    }
    
    setMembers(updatedMembers);
    store.saveMembers(updatedMembers);
    closeModal();
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      const updatedMembers = members.filter(m => m.id !== id);
      setMembers(updatedMembers);
      store.saveMembers(updatedMembers);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Members</h1>
        <button onClick={() => openModal()} className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
          <Plus className="w-5 h-5 mr-2" /> Add Member
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Phone</th>
                <th scope="col" className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map(member => (
                <tr key={member.id} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{member.name}</td>
                  <td className="px-6 py-4">{member.phone}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button onClick={() => openModal(member)} className="p-2 text-blue-600 hover:text-blue-800">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button onClick={() => handleDelete(member.id)} className="p-2 text-red-600 hover:text-red-800">
                        <Trash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && currentMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{currentMember.id ? 'Edit Member' : 'Add New Member'}</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" value={currentMember.name} onChange={e => setCurrentMember({...currentMember, name: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
              <input type="tel" placeholder="Phone Number" value={currentMember.phone} onChange={e => setCurrentMember({...currentMember, phone: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
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

export default ManageMembersPage;
