"use client"

import { OrganizationSwitcher, Show, SignIn, UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col p-6">
      <div className="flex justify-end">
        <Show when="signed-in">
          <div className="flex flex-col items-end gap-2">
            <UserButton />
            <OrganizationSwitcher hidePersonal />
          </div>
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
