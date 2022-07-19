import React from "react";
import "./content.css";

function Content(props) {
    const list = [
        "note1",
        "note123123123123123",
        "noteawdwd",
        "lawjdakwhdlkajhwdawdhalwdjawldjawlkdj",
        "lakjdalwkjd"
    ];
    return (
        <main className="flex flex-col justify-center content-center items-center gap-y-5">
            <section className="flex justify-center content-center items-center gap-x-2">
                <button className="text-violet-600 hover:text-violet-800 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                        />
                    </svg>
                </button>
                <input
                    placeholder="Input text"
                    className="rounded-xl pl-2 drop-shadow-lg"
                    autoComplete="off"
                />
            </section>
            <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4">
                {list.map((item) => (
                    <span
                        className="min-w-0 break-words bg-violet-400 p-2 rounded-xl drop-shadow-lg note cursor-pointer"
                        key={item}
                    >
                        <span className="flex justify-between note__buttons-hover">
                            <input type="checkbox" className="w-4" />
                            <span className="flex gap-2">
                                <button className="text-violet-600 hover:text-violet-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                </button>
                                <button className="text-violet-600 hover:text-violet-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </span>
                        {item}
                    </span>
                ))}
            </section>
            <section className="absolute top-0 left-0 right-0 bottom-0 bg-slate-800/80 flex justify-center content-center items-center">
                <div className="flex flex-col gap-3 bg-violet-400 p-4 drop-shadow-lg rounded-xl">
                    <h2 className="text-center text-xl">Edit</h2>
                    <span className="flex flex-column gap-1">
                        <label>Name</label>
                        <input className="rounded-xl pl-2" type="text" />
                    </span>
                    <span className="flex flex-column gap-1">
                        <label>Text</label>
                        <textarea className="rounded-xl p-2" name=""></textarea>
                    </span>
                    <span className="flex justify-around">
                        <button className="text-violet-600 hover:text-violet-800">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </button>
                        <button className="text-violet-600 hover:text-violet-800">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            </section>
        </main>
    );
}

Content.propTypes = {};

export default Content;
