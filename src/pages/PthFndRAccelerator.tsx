import { OfferingPage } from '../components/OfferingPage';
import { pthfndrAcceleratorContent as C } from '../content/pages/pthfndrAccelerator';

export default function PthFndRAccelerator() {
  return (
    <OfferingPage
      seoTitle={C.seoTitle}
      seoDescription={C.seoDescription}
      canonical={C.canonical}
      eyebrow={C.eyebrow}
      headline={C.headline}
      accent={C.accent}
      subhead={C.subhead}
      atAGlance={C.atAGlance}
      sections={C.sections}
      cta={C.cta}
    />
  );
}
