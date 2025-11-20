import { AppHeader, BestLuxurySection, FindProperties, HomepageBannerSection } from "@/components/shared";
import Footer from "@/components/shared/footer";
import { TravelInsightSection } from "@/components/shared/travel-insight.section";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LucideChevronsDown } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col h-full">
      <AppHeader />
      <div className="flex flex-col">
        <div className="flex w-full h-[calc(100vh)] ">
          <div className="flex relative bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.6)),url('/images/home-page-desktop.bg.webp')] sm:bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.6)),url('/images/home-page-desktop.bg.webp')] bg-[40%_75%] bg-cover w-full min-h-max justify-center sm:rounded-b-[48px] rounded-b-[24px]"
          >
            <div className="w-full h-full max-w-282 flex flex-col gap-10 p-4 sm:px-0">
              <div className="w-full h-full flex sm:flex-row flex-col gap-30 items-end">
                <FindProperties className="max-w-114 max-h-136" />
                <div className="sm:flex hidden w-full max-h-96 h-full  py-14.5">
                  <div className="flex flex-col gap-1 items-end justify-start">
                    <Label className="text-left text-white font-bold" variant="H2" mobile="H4">Find Your Dream Home.</Label>
                    <Label className="text-left text-white font-bold" variant="H2" mobile="H4">Fast, Easy, Trusted</Label>
                    <div className="flex flex-col">
                      <Label className="text-left text-white" variant="Body1" mobile="Body3">Discover top-notch sports venues and connect</Label>
                      <Label className="text-left text-white" variant="Body1" mobile="Body3">with players who match your skill and passion.</Label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full h-full flex-1 justify-center items-center">
                <Label className="text-white">A New Vision of Comfort</Label>
                <Button variant="icon">
                  <LucideChevronsDown />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:my-15 flex flex-col lg:gap-20 sm:gap-10 md:16 gap-6">
          <HomepageBannerSection />
          <div className="flex flex-1 w-full h-full justify-center">
            <div className="max-w-290 w-full flex flex-col flex-1">
              <BestLuxurySection />
              <TravelInsightSection className={"px-4"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}