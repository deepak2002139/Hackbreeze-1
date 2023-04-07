const sidebar = () => {
  return (
    <div className="flex items-start justify-end text-sm w-1/15 flex-col min-h-screen bg-[#7B2869] mt-10 rounded-lg">
        <button className=" bg-red-400 rounded-full  w-full">Profile</button>
        <button className=" bg-blue-200 rounded-full  w-full">Dark</button>
        <button className=" bg-red-200 rounded-full w-full">Settings</button>
    </div>
  )
}
export default sidebar