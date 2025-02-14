
const data = [
    {
        parameter:"Total Project Area",
        value:"200,000 sq ft"
    },
    {
        parameter:"Proximity to Renewable Energy Sources",
        value:"1km"
    },
    {
        parameter:"Annual Carbon Capture Potential",
        value:"400,000 metric tons"
    },
    {
        parameter:"Infrastructure Readiness for Carbon Projects",
        value:"100%"
    },
    {
        parameter:"Project Type",
        value:"Reduction"
    },
]

const ValueParameter = () => {
  return (
    <div className="grid grid-cols-1 mb-6 gap-y-2">
    {data.map((item, index) => (
      <>
        <div
          key={index}
          className="flex flex-row items-center justify-between w-full h-full bg-white border border-black rounded-xl"
        >
          <p className="p-4 text-lg text-black">
            {item.parameter.charAt(0).toUpperCase() +
              item.parameter.slice(1)}
          </p>
          <p className="flex items-center justify-center w-40 h-full p-4 font-bold text-center bg-alpha text-beta rounded-e-xl">
            {item.value.charAt(0).toUpperCase() +
              item.value.slice(1)}
          </p>
        </div>
      </>
    ))}
  </div>
  )
}

export default ValueParameter
