import { MdCheck, MdDeleteForever } from "react-icons/md";
export const TodoList = ({ index, data, onHandleDelete }) => {
  return (
    <>
      <li key={index} className="todo-item">
        <span className="todo-item">{data}</span>
        <button className="check-btn">
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={() => onHandleDelete(data)}>
          <MdDeleteForever />
        </button>
      </li>
    </>
  );
};
