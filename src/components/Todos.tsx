import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateTodo } from "../services/mutations";
import { useTodoIds, useTodos } from "../services/queries";
import { Todo } from "../types/todo";

// const Todo = () => {
//     const todoIdsQuery = useTodoIds();

//     if (todoIdsQuery.isLoading) {
//         return <span>Loading...</span>;
//     }
//     if (todoIdsQuery.isError) {
//         return <span>There is an Error</span>;
//     }
//     return (
//         <div>
//             {todoIdsQuery.data?.map((id) => (
//                 <div key={id}>{id}</div>
//             ))}
//         </div>
//     );
// };

// export default Todo;

export default function Todos() {
  const todoIdsQuery = useTodoIds();
  const todosQueries = useTodos(todoIdsQuery.data);

  if (todoIdsQuery.isLoading) {
    return <span>Loading...</span>;
  }
  if (todoIdsQuery.isError) {
    return <span>There is an Error</span>;
  }
  //\end{code}

  //create todo
  const createTodoMutation = useCreateTodo();

  // Creating react form
  const { register, handleSubmit } = useForm<Todo>();
  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <h4>Add new todo</h4>
        <input placeholder="Title" {...register('title')} />
        <br />
        <input placeholder="Description" {...register("description")} />
        <br />
        <input type="submit" value="submit" />
      </form>
      <div className="todo">
        <p>Quary function status : {todoIdsQuery.fetchStatus}</p>
        <p>Quary function status : {todoIdsQuery.status}</p>
        <p>Global f : {todoIdsQuery.isFetching}</p>
        {todoIdsQuery.data?.map((id) => (
          <div key={id}>{id}</div>
        ))}
      </div>
      <div className="useTodos">
        <ul>

        </ul>
        {todosQueries.map(({ data }) => (
            <li key={data?.id}>
                <div>ID: {data?.id}</div>
                <span>
                    <strong>Title:</strong>{data?.title}
                    <strong>Description:</strong>{data?.description}
                </span>
            </li>
        ))}
      </div>
    </div>
  );
}
