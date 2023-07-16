export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center   min-h-screen py-2">
      <h1>Profile Page of Params</h1>
      <p>
        Id={" "}
        <span className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          {params.id}
        </span>
      </p>
    </div>
  );
}
