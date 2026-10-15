import React from 'react';
import type { SelectedOfferings } from '../../types/document';
import { CheckCircle2, Circle, Sparkles, Video, MapPin, Megaphone, Globe, Search } from 'lucide-react';

interface Props {
  selected: SelectedOfferings;
  onChange: (updated: SelectedOfferings) => void;
}

export const Step2Offerings: React.FC<Props> = ({ selected, onChange }) => {
  const toggleOffering = (key: keyof SelectedOfferings) => {
    const updated = { ...selected, [key]: !selected[key] };
    
    // Automatic helpful rule: If Social Media is turned on, recommend enabling GBP as complimentary!
    if (key === 'socialMedia' && !selected.socialMedia && !selected.gbp) {
      updated.gbp = true; // Auto-activate complimentary GBP
    }
    
    onChange(updated);
  };

  return (
    <div className="wizard-step-pane">
      <div className="step-intro">
        <h3 className="step-title">Select Offerings for Client</h3>
        <p className="step-subtitle">
          Select which services apply to this client proposal. Only the selected modules will have input forms and generate Annexures in the final document.
        </p>
      </div>

      {selected.socialMedia && (
        <div className="alert-callout info">
          <Sparkles className="alert-icon" size={20} />
          <div className="alert-text">
            <strong>Package Perk Active:</strong> Google Business Profile (GBP) is <strong>COMPLIMENTARY (₹0)</strong> when Social Media Services is selected!
          </div>
        </div>
      )}

      <div className="offerings-selection-grid">
        {/* 1. Social Media Management */}
        <div
          className={`offering-select-card ${selected.socialMedia ? 'active' : ''}`}
          onClick={() => toggleOffering('socialMedia')}
        >
          <div className="card-select-icon">
            {selected.socialMedia ? <CheckCircle2 className="text-emerald" size={24} /> : <Circle className="text-muted" size={24} />}
          </div>
          <div className="card-content">
            <div className="card-top-row">
              <span className="card-badge badge-primary"><Video size={14} /> Video & Creative</span>
              <span className="card-price-tag">₹6,000 – ₹10,000 / mo</span>
            </div>
            <h4 className="card-name">Social Media Services</h4>
            <p className="card-desc">
              Reels production, static graphics, monthly content planning, on-site/client shoots, and organic metric reporting.
            </p>
            <div className="card-footer-note">
              ★ Includes 1 month complimentary trial & unlocks free GBP
            </div>
          </div>
        </div>

        {/* 2. Google Business Profile */}
        <div
          className={`offering-select-card ${selected.gbp ? 'active' : ''}`}
          onClick={() => toggleOffering('gbp')}
        >
          <div className="card-select-icon">
            {selected.gbp ? <CheckCircle2 className="text-emerald" size={24} /> : <Circle className="text-muted" size={24} />}
          </div>
          <div className="card-content">
            <div className="card-top-row">
              <span className="card-badge badge-accent"><MapPin size={14} /> Local Search</span>
              {selected.socialMedia ? (
                <span className="card-price-tag free">FREE (Complimentary)</span>
              ) : (
                <span className="card-price-tag">₹2,000 / mo</span>
              )}
            </div>
            <h4 className="card-name">Google Business Profile (GBP)</h4>
            <p className="card-desc">
              Local SEO map ranking, 2 posts per week (8/mo), Q&A injections, review monitoring, and spam defense.
            </p>
            {selected.socialMedia && (
              <div className="card-footer-note highlight">
                ✓ 100% Free Benefit applied from Social Media bundle
              </div>
            )}
          </div>
        </div>

        {/* 3. Paid Advertisements */}
        <div
          className={`offering-select-card ${selected.paidAds ? 'active' : ''}`}
          onClick={() => toggleOffering('paidAds')}
        >
          <div className="card-select-icon">
            {selected.paidAds ? <CheckCircle2 className="text-emerald" size={24} /> : <Circle className="text-muted" size={24} />}
          </div>
          <div className="card-content">
            <div className="card-top-row">
              <span className="card-badge badge-warning"><Megaphone size={14} /> Paid Traffic</span>
              <span className="card-price-tag">₹2,000 – ₹3,000 / mo</span>
            </div>
            <h4 className="card-name">Paid Advertisements (Meta & Google)</h4>
            <p className="card-desc">
              Campaign configuration, 3–5 monthly ad creatives, daily anomaly tracking, and direct CRM/spreadsheet lead sync.
            </p>
            <div className="card-footer-note">
              Ad spend paid directly by client to Meta/Google
            </div>
          </div>
        </div>

        {/* 4. Website Design & Dev */}
        <div
          className={`offering-select-card ${selected.website ? 'active' : ''}`}
          onClick={() => toggleOffering('website')}
        >
          <div className="card-select-icon">
            {selected.website ? <CheckCircle2 className="text-emerald" size={24} /> : <Circle className="text-muted" size={24} />}
          </div>
          <div className="card-content">
            <div className="card-top-row">
              <span className="card-badge badge-info"><Globe size={14} /> Web Asset</span>
              <span className="card-price-tag">₹5,000</span>
            </div>
            <h4 className="card-name">Website Design & Development</h4>
            <p className="card-desc">
              5–7 responsive pages (incl. 1 landing page), CMS setup, SEO semantics, and milestone billing (50% / 25% / 25%).
            </p>
          </div>
        </div>

        {/* 5. SEO Services */}
        <div
          className={`offering-select-card ${selected.seo ? 'active' : ''}`}
          onClick={() => toggleOffering('seo')}
        >
          <div className="card-select-icon">
            {selected.seo ? <CheckCircle2 className="text-emerald" size={24} /> : <Circle className="text-muted" size={24} />}
          </div>
          <div className="card-content">
            <div className="card-top-row">
              <span className="card-badge badge-purple"><Search size={14} /> Organic Search</span>
              <span className="card-price-tag">₹5,000 / mo</span>
            </div>
            <h4 className="card-name">Search Engine Optimisation (SEO)</h4>
            <p className="card-desc">
              10 primary target keywords, 7–8 pages on-page optimization per month, tech audit, and monthly rank reports.
            </p>
          </div>
        </div>

        {/* 6. Annexure G: Onboarding Checklist */}
        <div
          className={`offering-select-card ${selected.onboardingChecklist ? 'active' : ''}`}
          onClick={() => toggleOffering('onboardingChecklist')}
        >
          <div className="card-select-icon">
            {selected.onboardingChecklist ? <CheckCircle2 className="text-emerald" size={24} /> : <Circle className="text-muted" size={24} />}
          </div>
          <div className="card-content">
            <div className="card-top-row">
              <span className="card-badge badge-primary">Annexure G</span>
              <span className="card-price-tag free">Recommended</span>
            </div>
            <h4 className="card-name">Customer Onboarding Checklist</h4>
            <p className="card-desc">
              10-point readiness audit (delegated platform access, brand assets, doctor filming permissions, and kickoff milestones).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
