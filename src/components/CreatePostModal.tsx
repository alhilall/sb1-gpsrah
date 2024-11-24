import { useState } from 'react';
import { X, Image, Link, Smile } from 'lucide-react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (content: string) => void;
}

function CreatePostModal({ isOpen, onClose, onSubmit }: CreatePostModalProps) {
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit?.(content);
      setContent('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={20} />
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-medium hover:bg-blue-700"
            disabled={!content.trim()}
          >
            نشر
          </button>
        </div>
        <div className="p-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="ما الذي يدور في ذهنك؟"
            className="w-full min-h-[150px] resize-none border-none focus:ring-0 text-lg"
            autoFocus
          />
          <div className="flex gap-4 text-blue-600">
            <button className="p-2 hover:bg-blue-50 rounded-full">
              <Image size={20} />
            </button>
            <button className="p-2 hover:bg-blue-50 rounded-full">
              <Link size={20} />
            </button>
            <button className="p-2 hover:bg-blue-50 rounded-full">
              <Smile size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePostModal;