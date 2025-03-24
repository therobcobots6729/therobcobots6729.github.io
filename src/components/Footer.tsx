import { useQRScoutState } from '@/store/store';
import { Heart } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const teamNumber = useQRScoutState(state => state.formData.teamNumber);
  return (
    <footer>
      <div className="mt-8 flex flex-col items-center justify-center p-2 gap-2">
        <div className="h-384 w-96">
          <Logo />
        </div>
        {teamNumber == 9496 && (
          <>
            <span className="text-2xl text-primary font-lynk">
              We
            </span>
            <Heart className="text-primary size-8 fill-primary" />
            <span className="text-2xl text-primary font-lynk">
              Our Scouters!
            </span>
          </>
        )}
      </div>
    </footer>
  );
}
