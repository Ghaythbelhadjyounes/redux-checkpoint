import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Divider } from "semantic-ui-react";

import TodoCard from "./TodoCard";

function TodoList() {
  const list = useSelector((state) => state.TodoRed.tasks);
  const [status, setStatus] = useState("all");
  return (
    <div>
      <br />
      <Button.Group basic>
        <Button onClick={() => setStatus("All")}>All</Button>
        <Button onClick={() => setStatus("Done")}>Done</Button>
        <Button onClick={() => setStatus("Undone")}>Undone</Button>
      </Button.Group>
      <Divider />

      {status === "All"
        ? list.map((el) => <TodoCard key={el.id} tasks={el} />)
        : status === "Done"
        ? list
            .filter((el) => el.IsDone)
            .map((el) => <TodoCard key={el.id} tasks={el} />)
        : list
            .filter((el) => !el.IsDone)
            .map((el) => <TodoCard key={el.id} tasks={el} />)}
    </div>
  );
}

export default TodoList;
