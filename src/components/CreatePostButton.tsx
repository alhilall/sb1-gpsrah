import { Plus } from 'lucide-react';
import { useState } from 'react';
import CreatePostModal from './CreatePostModal';

function CreatePostButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-20 left-4 z-10 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
      >
        <Plus className="w-6 h-6" />
      </button>
      <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default CreatePostButton;