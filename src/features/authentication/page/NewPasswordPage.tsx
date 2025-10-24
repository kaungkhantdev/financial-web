import { NewPasswordForm } from "@/features/authentication";

export default function NewPasswordPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm dark:bg-card bg-white p-6 rounded-3xl">
        <NewPasswordForm />
      </div>
    </div>
  )
}
