"use client"

import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}));

  return (
    <div className="p-4  max-w-7xl mx-auto flex flex-col gap-4">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={() => invoke.mutate({ text: value })}>Invoke</Button>
    </div>
  )

};

export default Home;