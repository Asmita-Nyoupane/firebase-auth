import SignIn from "@/components/auth";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <SignIn />
    </div>
  );
}
