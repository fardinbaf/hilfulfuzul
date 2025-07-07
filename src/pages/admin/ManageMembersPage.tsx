import { useState } from 'react';
import { useData, Member } from '../../context/DataContext';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

type MemberFormData = Omit<Member, 'id' | 'created_at'>;

const ManageMembersPage = () => {
  const { members, addMember, updateMember, deleteMember } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState<Member | null>(null);

  const openModal = (member: Member | null = null) => {
    setCurrentMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMember(null);
  };

  const handleSave = async (memberData: MemberFormData) => {
    const promise = currentMember
      ? updateMember(currentMember.id, memberData)
      : addMember(memberData);
    
    toast.promise(promise, {
      loading: 'Saving member...',
      success: `Member ${currentMember ? 'updated' : 'added'} successfully!`,
      error: `Failed to save member.`,
    });
    
    promise.then(closeModal).catch(() => {});
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      const promise = deleteMember(id);
      toast.promise(promise, {
        loading: 'Deleting member...',
        success: 'Member deleted successfully!',
        error: 'Failed to delete member.',
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Members</h1>
        <button onClick={() => openModal()} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md flex items-center">
          <Plus size={18} className="mr-2" />
          Add Member
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {members.map(member => (
              <tr key={member.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => openModal(member)} className="text-emerald-600 hover:text-emerald-900 mr-4"><Edit size={18} /></button>
                  <button onClick={() => handleDelete(member.id)} className="text-red-600 hover:text-red-900"><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && <MemberModal member={currentMember} onSave={handleSave} onClose={closeModal} />}
    </div>
  );
};

const MemberModal = ({ member, onSave, onClose }: { member: Member | null, onSave: (data: MemberFormData) => void, onClose: () => void }) => {
    const [formData, setFormData] = useState<MemberFormData>({
        name: member?.name || '',
        phone: member?.phone || '',
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
                <h2 className="text-2xl font-bold mb-4">{member ? 'Edit Member' : 'Add Member'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border rounded" required />
                    <div className="flex justify-end space-x-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default ManageMembersPage;
