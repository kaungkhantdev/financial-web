import { AccountContent, AppearanceContent, GeneralContent, SettingTabs } from "@/features/setting";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  tabs: [
    {
      trigger: "general",
      contentData: GeneralContent,
    },
    {
      trigger: "account",
      contentData: AccountContent,
    },
    {
      trigger: "appearance",
      contentData: AppearanceContent,
    },
  ],
}

const SettingPage = () => {
  return (
    <div className="p-6">
        <SettingTabs tabs={data.tabs} />
    </div>
  )
}

export default SettingPage