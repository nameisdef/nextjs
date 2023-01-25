import { Count } from "@/Components/Count"
import { Count2 } from "@/Components/Count2"

export default function Home() {
  return (
    <>
    <h1>Counter</h1>
      <Count down={false}></Count>
    </>
  )
}
