import React, {useState, useRef} from 'react';

const DEFAULT_MAX_FILE_SIZE = 10000000; // 10MB
const DEFAULT_ACCEPT_TYPES = ".txt,.pdf";

export default function FileUpload({label, fileCallBack, maxFileSize = DEFAULT_MAX_FILE_SIZE, accept= DEFAULT_ACCEPT_TYPES
}) {
    const [file, setFile] = useState(null);
    const fileInputField = useRef(null);
    
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file.size > maxFileSize) {
            alert("File is too big!");
            return;
        }
        setFile(file);
        fileCallBack(file);
    }

    return (
        <div>
            <div>
                <label>{label}</label>
                <button type="button">
                    <span> Upload New File:</span>
                </button>
                <input 
                className = "block w-full text-sm text-slate-900 border border-slate-300 rounded-lg cursor-pointer bg-slate-50 dark:text-slate-400 focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 file:mr-4 file:py-2 file:px-4 file:full file:border-0 file:text-sm file:font-semibold file:bg-slate-200 file:dark:bg-slate-900 file:dark:text-white hover:file:bg-slate-100 hover:file:dark:bg-slate-800" 
                aria-describedby="file_input_help" id="file_input" ref={fileInputField} type="file" accept=".txt, application/pdf"/>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300" id="file_input_help">TXT or PDF (Max. {maxFileSize/1000000} MB).</p>
                <div>
                    <label
                    htmlFor="Title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Title
                    </label>
                    <input
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    />
                </div>
                <button onClick = {handleFileUpload}>Upload</button>
            </div>
            <div>
                <section className='text-l'>
                    {file && (
                        "Selected: " + file.name + " " + file.size + " " + file.type
                    )}
                </section>
            </div>
        </div>
    );
}