import { faAnglesUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const data = [
    {
        update:"New infrastructure improvements provide enhanced access to the site, facilitating the transport of materials for carbon reduction projects.",
        time:"270 days ago",

    },
    {
        update:"Government incentives for carbon reduction projects in the region have increased, boosting the site's potential for environmental initiatives.",
        time:"313 days ago"
    },
    {
        update:"Local authorities announced plans to plant a large-scale afforestation project nearby, amplifying the site's environmental impact.",
        time:"158 days ago"
    }
]

const ViewPageUpdates = () => {


  return (
    <div className="grid grid-cols-1 mb-6 gap-y-2">
    {data.map((item, index) => (
      <div
        key={index}
        className="flex flex-row items-center justify-start w-full h-full border-black bg-gamma rounded-xl"
      >
        <div className="px-4 py-2 pl-8">
          <FontAwesomeIcon icon={faAnglesUp} size="lg" />
        </div>
        <div className="flex flex-col items-start justify-start px-3 py-3 leading-tight">
          <p className="text-sm text-black/50 font-">
            {item.time}
          </p>
          <p className="pb-1 pr-3 leading-tight text-black text-md">
            {item.update.charAt(0).toUpperCase() +
              item.update.slice(1)}
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ViewPageUpdates
