import { useEffect, useState } from "react";

type taskType = {
  id: string;
  title: string;
  description: string;
  deadline: string;
};

type EditDialogType = {
  isOpen: boolean;
  initialData: taskType;
  onConfirm: (updatedTask: taskType) => void;
  onCancel: () => void;
};

export default function EditDialog({ isOpen, initialData , onConfirm , onCancel,}: EditDialogType) {
  
  const [title, setTitle] = useState(initialData?.title);
  const [description, setDescription] = useState(initialData?.description);
  const [deadline, setDeadline] = useState(initialData?.deadline);

  useEffect(() => {
    if (isOpen) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setDeadline(initialData.deadline);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm({
      id: initialData.id,
      title,
      description,
      deadline,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-[500px] h-[290px] py-9 px-[24px] bg-white/95 rounded-2xl flex flex-col gap-6">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-black p-1 rounded-md border-2 border-gray-300"
        />

        <input
          type="text"
          placeholder="details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-black p-1 rounded-md border-2 border-gray-300"
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-[170px] ml-[138px] text-black py-1 rounded-md border-2 border-gray-300"
        />

        <div className="flex justify-center mt-3 gap-4">
          <button
            onClick={handleConfirm}
            className="p-2 w-15 bg-red-500 rounded-md shadow-md shadow-gray-500 text-white font-bold hover:bg-red-600"
          >
            Edit
          </button>

          <button
            onClick={onCancel}
            className="p-2 w-15 bg-stone-400 rounded-md shadow-md shadow-gray-500 text-white flex justify-center font-bold hover:bg-stone-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
