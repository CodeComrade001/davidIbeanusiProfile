import { AppSidebar } from "@/components/app-sidebar"
import AboutME from "@/components/dashboard/AboutMe"
import MyExperience from "@/components/dashboard/experienceOfMe"
import SkillsChart from "@/components/dashboard/Skills"
import Work from "@/components/dashboard/Work"
import DolistifyOverview from "@/components/projects/dolistify"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        
        <header className="flex h-16 w-[90%] mx-auto shrink-0 roounded-[15px] fixed pt-0 px-10 items-center gap-2 bg-white rounded-md 
        ">
          <div className="flex items-center w-[100%] gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <nav className="flex px-5 py-3 text-white border border-gray-200 mx-auto rounded-lg bg-gray-50 sticky from-sky-400 to-emerald-600 bg-gradient-to-r  dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                    </svg>
                    <a href="#" className="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">About Me</a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </header>
        <div className="flex mt-20 flex-1 flex-col gap-4 p-4 pt-0 overflow-auto">
          <AboutME/>
          <Work />
          <SkillsChart />
          <MyExperience />
          <DolistifyOverview  />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
