import HomeContent from '@/components/HomeContent';
import { getAllEssays } from '@/lib/essays';

export default function Home() {
  const essays = getAllEssays();
  return <HomeContent essays={essays} />;
}
