
type conformDialogType = {
    isOpen : boolean;
    message ?: string;
    onCofrim ?: () => void;
    onCancel ?: () => void;
};

export default function ConformDialog({isOpen , message , onCofrim , onCancel} : conformDialogType ){
   
    if (!isOpen) return null;

    return(
        <div className= "fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="w-[350px] px-3 py-6 bg-white/95 shadow-sm shadow-white rounded-md text-center">
                <p className="text-black font-semibold mb-2"> Are you sure you want to delete <span className="text-amber-600">"{message}"</span>? </p>
                <div className="flex justify-center gap-4">
                    <button onClick={onCofrim} className="p-2 w-15 bg-red-500 rounded-md shadow-md shadow-gray-500 text-white font-bold hover:bg-red-600">
                        Yes
                    </button>
                    <button onClick={onCancel} className="p-2 w-15 bg-stone-400 rounded-md shadow-md shadow-gray-500 text-white flex justify-center font-bold hover:bg-stone-500">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}