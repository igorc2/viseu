"use client"

import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"

export const Client = () => { 
    const trpc = useTRPC()
    const { data } = useSuspenseQuery(trpc.createUser.queryOptions({ text: "client" }));

    return (
        <div>
            <h1>Hello World</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}