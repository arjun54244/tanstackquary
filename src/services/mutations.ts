import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "./api";
import { Todo } from "../types/todo";

export function useCreateTodo() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: Todo) => createTodo(data),
      onMutate: () => {
        console.log("mutate");
      },
      onError: () => {
        console.log("error");
      },
      onSuccess: () => {
        console.log("success");
      },
      onSettled: async (error) => {
        console.log("settled");
        if (error) {
          console.log("error in mutation file");
        } else {
          await queryClient.invalidateQueries({ queryKey: ["todos"] });
        }
      }
    });
  }