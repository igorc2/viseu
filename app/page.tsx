
import { getQueryClient, trpc } from "@/trpc/server";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";

const Home = () => {

  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.createUser.queryOptions({ text: "client" }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  ) 

};

export default Home;