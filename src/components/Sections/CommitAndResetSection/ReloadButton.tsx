import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { resetToDefaultConfig } from '../../../store/store';

export type ReloadButtonProps = {
  disabled?: boolean;
};

export function ReloadButton(props: ReloadButtonProps) {
  return (
    <Button
      variant="destructive"
      onClick={() => resetToDefaultConfig()}
      disabled={props.disabled}
    >
      <RefreshCcw className="h-5 w-5" />
      Reload Config
    </Button>
  );
}
