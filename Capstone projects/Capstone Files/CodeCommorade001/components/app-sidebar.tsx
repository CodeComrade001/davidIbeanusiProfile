"use client"

import * as React from "react"
import {
  Frame,
  Map,
  PieChart,
} from "lucide-react"
import { NavProjects } from "@/components/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Ibeanusi David Uchechukwu",
    email: "davidibeanusi203@gmail.com",
  },
  navMain: [

    {
      name: "About ",
      url: "#",
      icon: Frame,
    },
    {
      name: "Work",
      url: "#",
      icon: Frame,
    },
    {
      name: "Skills",
      url: "#",
      icon: Frame,
    },
    {
      name: "Experience",
      url: "#",
      icon: Frame,
    },

  ],

  projects: [
    {
      name: "Dolistify",
      url: "#dolistify project",
      icon: Frame,
    },
    {
      name: "E-commerce Website",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Thepia",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarContent>
              <a href="#" className="flex-col gap-5 h-[250px] flex" >
                <div className="h-[80%] w-[100%] ">
                  <img
                    src="/profile.png"
                    alt="alt"
                    style={{ height: "100%", width: "100%" }}
                    className="rounded-[12px] "
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{data.user.email}</span>
                  <span className="truncate text-xs">{data.user.name}</span>
                </div>
              </a>
            </SidebarContent>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects
          nameGrouping={'Dashboard'}
          nameGroupingItems={data.navMain}
        />
        <NavProjects
          nameGrouping={'Projects'}
          nameGroupingItems={data.projects}
        />
      </SidebarContent>
    </Sidebar>
  )
}
