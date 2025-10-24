import { WalletHeader } from "@/features/wallet/components/WalletHeader"
import Basics from "../components/Basics"

const SettingPage = () => {
  return (
    <div className="md:p-8 lg:py-6 lg:pl-0 lg:pr-6 2xl:flex items-center justify-center w-full 2xl:min-h-screen">
      <WalletHeader title="Settings" />
      <Basics />
    </div>
  )
}

export default SettingPage