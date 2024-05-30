
import { useQueries, useQuery } from "@tanstack/react-query"
import { getTodo, getTodosIds } from "./api"

export const useTodoIds =()=>{
    return useQuery({
        queryKey: ["todo"],
        queryFn: getTodosIds
    })
}

export const useTodos =(id:(number | undefined)[]| undefined)=>{
    return useQueries({
        queries: (id?? []).map((id) => {
            return {
                queryKey: ["todo", id],
                queryFn: () => getTodo(id!)
            }
        })
    })
}