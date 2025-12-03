import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { LeadershipDistCard } from '@/components/LeadershipDistCard';
import { CampaignCard } from '@/components/CampaignCard';
import { CelebrarCard } from '@/components/CelebrarCard';

export default function IndexCelebrarCard() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-20">
      <main className="flex-1 flex px-[60px] py-6 gap-6 max-w-[1360px] w-full mx-auto">
        <CelebrarCard/>
      </main>
    </div>
  );
}
