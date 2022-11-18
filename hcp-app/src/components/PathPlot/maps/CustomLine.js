import { useMapContext } from "react-simple-maps"

const CustomLine = () => {
  const { path } = useMapContext()
  const d = path({
    type: "LineString",
    coordinates: [
      [-80, 0],
      [80, 0],
    ],
  })
  return <path d={d} stroke="#06F" strokeWidth={3} />
}
