"use client"

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
    step: number;
}


export function Step({
    step,
}: StepProps) {

    return (
        <>
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base py-4">
                <li className={`flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden  after:mx-6 xl:after:mx-10 dark:after:border-gray-700   ${step > 0 ? "text-blue-600 dark:text-blue-500" : ""}`}>
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="me-2">1</span>
                        Upload <span className="hidden sm:inline-flex sm:ms-2">Video</span>
                    </span>
                </li>
                <li className={`flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden  after:mx-6 xl:after:mx-10 dark:after:border-gray-700  ${step > 1 ? "text-blue-600 dark:text-blue-500" : ""}`}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <span className="me-2">2</span>
                        Trans <span className="hidden sm:inline-flex sm:ms-2">Audio</span>
                    </span>
                </li>
                <li className={`flex items-center ${step > 2 ? "text-blue-600 dark:text-blue-500" : ""}`}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="me-2">3</span>
                    Download <span className="hidden sm:inline-flex sm:ms-2">Audio</span>
                </li>
            </ol>
        </>
    )
}
