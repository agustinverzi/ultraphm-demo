import { UltraPieChart } from "@/components/ultra-pie-chart"
import { UltraRadialChart } from "@/components/ultra-radial-chart"
import { UltraLineChart } from "@/components/ultra-line-chart"
import { PaymentsDataTable } from "@/components/payments-table"

export default function DashboardPage() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <UltraPieChart />
        <UltraRadialChart />
        <UltraLineChart />
      </div>
      <PaymentsDataTable />
    </>
  )
}
