"use client"

import { SignInButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";
export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton  mode="modal">
          <Button>
            Sign In
          </Button>
          
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle />
      <Button variant={"secondary" }>Click me</Button>
    </div>
  );
}
