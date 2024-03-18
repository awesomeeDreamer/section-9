import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd , onCancel}) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const entertedTitle = title.current.value;
    const entertedDescription = description.current.value;
    const entertedDueDate = dueDate.current.value;

    if (
      entertedTitle.trim() === "" ||
      entertedDescription.trim() === "" ||
      entertedDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: entertedTitle,
      description: entertedDescription,
      dueDate: entertedDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='OkAy'>
      <h2 className="text-xl font-bold text-stone-600 my-4">Invaild Input</h2>
      <p className="text-stone-500 mb-4">Ooops....looks like you forgot to enter a value.</p>
      <p className="text-stone-500 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal> 
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
