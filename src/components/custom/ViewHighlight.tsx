const data =[
    {
        highlight:"Carbon Capture Fields is strategically located on the outskirts of Pune, a growing hub for eco-friendly and sustainable projects. The site is ideal for environmental initiatives like carbon capture and reforestation."
    },
    {
        highlight:"The plot is dedicated to reduction-focused projects, offering flexibility for developers to implement green technologies, renewable energy systems, or afforestation efforts. This increases its ecological and investment value."
    },
    {
        highlight:"Essential infrastructure, including water, electricity, and access roads, is already in place, enabling immediate commencement of sustainable projects. This minimizes upfront costs and accelerates implementation."
    },
    {
        highlight:"Close to key infrastructure such as highways, educational institutions, and healthcare facilities, the plot offers convenience and accessibility. Its location enhances its appeal for environmentally sustainable developments."
    },
]

const ViewHighlight = () => {
  return (
    <div className="grid grid-cols-2 mb-6 gap-x-4 gap-y-6">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row bg-white border border-black rounded-xl"
                  >
                    <div className="flex items-center justify-center p-0 m-0 bg-black rounded-tl-xl rounded-bl-xl w-[4.5rem]">
                      {/* display text vertically */}
                      <p className="px-0 m-0 text-white transform rotate-90 text-md">
                        {/* {index} */}
                      </p>
                    </div>
                    <p className="p-6 text-lg text-black">
                      {item.highlight.charAt(0).toUpperCase() +
                        item.highlight.slice(1)}
                    </p>
                  </div>
                ))}
              </div>
  )
}

export default ViewHighlight
