import { LoginForm } from "@/features/authentication"
import CompanyPhoto from '@/assets/company.jpg';
import { Logo } from "@/components/common/Logo";


export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-between">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="border text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Logo className="size-3.5" />
            </div>
            Finova
          </a>
          <div className="hidden md:flex flex-col items-center gap-2 text-center">
            <h1 className="font-medium">Login</h1>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm dark:bg-card bg-white p-6 rounded-3xl">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={CompanyPhoto}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
