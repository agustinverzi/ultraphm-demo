import { SignedOut, SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <SignedOut>
        <SignInButton forceRedirectUrl="/dashboard" />
      </SignedOut>
    </div>
  );
}
