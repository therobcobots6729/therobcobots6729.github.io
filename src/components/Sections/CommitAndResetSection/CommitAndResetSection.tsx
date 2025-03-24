import { QRModal } from '@/components/QR';
import { useMemo } from 'react';
import { useQRScoutState } from '../../../store/store';
import { Section } from '../../core/Section';
import { ResetButton } from './ResetButton';
import { ReloadButton } from './ReloadButton';

export function CommitAndResetSection() {
  const formData = useQRScoutState(state => state.formData);
  const fieldValues = useQRScoutState(state => state.fieldValues);

  const requiredFields = useMemo(() => {
    return formData.sections
      .map(s => s.fields)
      .flat()
      .filter(f => f.required)
      .map(f => f.code);
  }, [formData]);

  const missingRequiredFields = useMemo(() => {
    return fieldValues
      .filter(f => requiredFields.includes(f.code))
      .some(f => f.value === undefined || f.value === '' || f.value === null);
  }, [formData, fieldValues]);

  return (
    <Section>
      <QRModal disabled={missingRequiredFields} />
      <ResetButton />
      <ReloadButton />
    </Section>
  );
}
