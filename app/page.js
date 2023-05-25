// import { handler } from "@/utils/fetchData";
import Bio from "@/components/Bio";
import Stack from "@/components/Stack";
import LargeProjects from "@/components/LargeProjects";
import MiniProjects from "@/components/MiniProjects";

export default async function Home() {
  // const { miniProjects } = await handler();
  return (
    <main>
      <Bio />
      <Stack />
      <LargeProjects />
      <MiniProjects />
      {/* <MiniProjects miniProjects={miniProjects} /> */}
    </main>
  );
}
