import { OfferingPage } from '../components/OfferingPage';
import { socialValueContent as C } from '../content/pages/socialValue';

export default function SocialValue() {
  return (
    <OfferingPage
      seoTitle={C.seoTitle}
      seoDescription={C.seoDescription}
      canonical={C.canonical}
      eyebrow={C.eyebrow}
      headline={C.headline}
      accent={C.accent}
      subhead={C.subhead}
      sections={C.sections}
      cta={C.cta}
    />
  );
}
