import type { DocumentData } from '../types/document';

export interface PricingSummary {
  monthlyRecurringTotal: number;
  oneTimeTotal: number;
  totalMonthlySavings: number;
  attachedAnnexuresList: string[];
  breakdown: {
    serviceName: string;
    type: 'monthly' | 'one-time';
    standardPrice: number;
    finalPrice: number;
    isComplimentary: boolean;
    notes?: string;
  }[];
}

export function calculatePricingAndInclusions(doc: DocumentData): PricingSummary {
  const breakdown: PricingSummary['breakdown'] = [];
  const attachedAnnexuresList: string[] = [];

  let monthlyRecurringTotal = 0;
  let oneTimeTotal = 0;
  let totalMonthlySavings = 0;

  // 1. Annexure A: Social Media & Content Services
  if (doc.selectedOfferings.socialMedia) {
    const smmPrice = doc.socialMedia.monthlyFee;
    monthlyRecurringTotal += smmPrice;
    breakdown.push({
      serviceName: 'Social Media & Content Services',
      type: 'monthly',
      standardPrice: doc.socialMedia.videoSupplier === 'agency_shoots' ? 10000 : 6000,
      finalPrice: smmPrice,
      isComplimentary: false,
      notes: `${doc.socialMedia.videoSupplier === 'agency_shoots' ? 'Agency Shoot' : 'Client Video'} | ${doc.socialMedia.trialPeriod}`
    });
    attachedAnnexuresList.push('Annexure A: Social Media & Content Services');
  }

  // 2. Annexure B: Google Business Profile (GBP) Management
  if (doc.selectedOfferings.gbp) {
    const isComplimentary = Boolean(doc.selectedOfferings.socialMedia);
    const finalGbpPrice = isComplimentary ? 0 : doc.gbp.monthlyFee;
    
    if (isComplimentary) {
      totalMonthlySavings += doc.gbp.monthlyFee;
    } else {
      monthlyRecurringTotal += finalGbpPrice;
    }

    breakdown.push({
      serviceName: 'Google Business Profile (GBP) Management',
      type: 'monthly',
      standardPrice: doc.gbp.monthlyFee,
      finalPrice: finalGbpPrice,
      isComplimentary: isComplimentary,
      notes: isComplimentary ? 'Agreed Complimentary Benefit (Free with Social Media)' : 'Standard Monthly Management'
    });
    attachedAnnexuresList.push('Annexure B: Google Business Profile Management');
  }

  // 3. Annexure C: Paid Advertising Management (Meta & Google)
  if (doc.selectedOfferings.paidAds) {
    const adsFee = doc.paidAds.agencyManagementFee;
    monthlyRecurringTotal += adsFee;
    breakdown.push({
      serviceName: 'Paid Advertising Management (Meta & Google)',
      type: 'monthly',
      standardPrice: doc.paidAds.accountStatus === 'new_account' ? 3000 : 2000,
      finalPrice: adsFee,
      isComplimentary: false,
      notes: `${doc.paidAds.accountStatus === 'new_account' ? 'New Account Setup' : 'Existing Account'} (Media spend paid directly to platforms)`
    });
    attachedAnnexuresList.push('Annexure C: Paid Advertising Management');
  }

  // 4. Annexure D: Website Design, Development & Management
  if (doc.selectedOfferings.website) {
    const devFee = doc.website.oneTimeFee || 5000;
    const maintFee = doc.website.monthlyMaintenanceFee || 0;

    if (devFee > 0) {
      oneTimeTotal += devFee;
      breakdown.push({
        serviceName: 'Website Design & Development',
        type: 'one-time',
        standardPrice: 5000,
        finalPrice: devFee,
        isComplimentary: false,
        notes: `${doc.website.pageCount} | CMS: ${doc.website.cmsPlatform} (Milestones: 50% / 25% / 25%)`
      });
    }

    if (maintFee > 0) {
      monthlyRecurringTotal += maintFee;
      breakdown.push({
        serviceName: 'Website Monthly Maintenance',
        type: 'monthly',
        standardPrice: maintFee,
        finalPrice: maintFee,
        isComplimentary: false,
        notes: 'Monthly backups, security updates & uptime monitoring'
      });
    }

    attachedAnnexuresList.push('Annexure D: Website Design, Development & Management');
  }

  // 5. Annexure E: Search Engine Optimisation (SEO)
  if (doc.selectedOfferings.seo) {
    const seoFee = doc.seo.monthlyRetainer;
    monthlyRecurringTotal += seoFee;
    breakdown.push({
      serviceName: 'Search Engine Optimisation (SEO)',
      type: 'monthly',
      standardPrice: 5000,
      finalPrice: seoFee,
      isComplimentary: false,
      notes: `${doc.seo.primaryKeywordsCount} Target Keywords | ${doc.seo.oneTimeSetupFee}`
    });
    attachedAnnexuresList.push('Annexure E: Search Engine Optimisation (SEO)');
  }

  // Annexure F: Consolidated Commercial Schedule (Always attached as master SOW)
  attachedAnnexuresList.push('Annexure F: Consolidated Commercial Schedule / SOW');

  // Annexure G: Customer Onboarding Checklist (Optional / default on)
  if (doc.selectedOfferings.onboardingChecklist) {
    attachedAnnexuresList.push('Annexure G: Customer Onboarding Checklist');
  }

  return {
    monthlyRecurringTotal,
    oneTimeTotal,
    totalMonthlySavings,
    attachedAnnexuresList,
    breakdown
  };
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
