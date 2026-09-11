"use client"

import { Show, SignIn, UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col p-6">
      <div className="flex justify-end">
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
      <Show when="signed-out">
        <div className="flex flex-1 items-center justify-center">
          <SignIn routing="hash" />
        </div>
      </Show>
    </div>
  )
}
