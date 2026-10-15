import React, { useState } from 'react';
import type { 
  DocumentData, 
  VideoSupplierOption, 
  AdAccountOption
} from '../../types/document';
import { Video, MapPin, Megaphone, Globe, Search, ClipboardCheck, Sparkles } from 'lucide-react';

interface Props {
  doc: DocumentData;
  onChange: (updated: DocumentData) => void;
}

export const Step3OfferingDetails: React.FC<Props> = ({ doc, onChange }) => {
  const { selectedOfferings } = doc;

  // Active sub-tab among selected offerings
  const availableTabs = [
    selectedOfferings.socialMedia ? 'socialMedia' : null,
    selectedOfferings.gbp ? 'gbp' : null,
    selectedOfferings.paidAds ? 'paidAds' : null,
    selectedOfferings.website ? 'website' : null,
    selectedOfferings.seo ? 'seo' : null,
    selectedOfferings.onboardingChecklist ? 'onboarding' : null,
  ].filter(Boolean) as string[];

  const [activeTab, setActiveTab] = useState<string>(availableTabs[0] || '');

  // Keep active tab valid
  const currentTab = availableTabs.includes(activeTab as any) ? activeTab : (availableTabs[0] || '');

  const updateSubField = <K extends keyof DocumentData>(
    section: K, 
    field: keyof DocumentData[K], 
    value: any
  ) => {
    onChange({
      ...doc,
      [section]: {
        ...(doc[section] as any),
        [field]: value
      }
    });
  };

  const handleVideoSupplierChange = (val: VideoSupplierOption) => {
    const suggestedPrice = val === 'agency_shoots' ? 10000 : 6000;
    onChange({
      ...doc,
      socialMedia: {
        ...doc.socialMedia,
        videoSupplier: val,
        // Only update price if it matches one of the defaults
        monthlyFee: (doc.socialMedia.monthlyFee === 10000 || doc.socialMedia.monthlyFee === 6000) 
          ? suggestedPrice 
          : doc.socialMedia.monthlyFee
      }
    });
  };

  const handleAdAccountStatusChange = (val: AdAccountOption) => {
    const suggestedFee = val === 'new_account' ? 3000 : 2000;
    onChange({
      ...doc,
      paidAds: {
        ...doc.paidAds,
        accountStatus: val,
        agencyManagementFee: suggestedFee
      }
    });
  };

  if (availableTabs.length === 0) {
    return (
      <div className="wizard-step-pane empty-state">
        <p>No offerings selected yet. Please go back to <strong>Step 2</strong> and pick at least one service.</p>
      </div>
    );
  }

  return (
    <div className="wizard-step-pane">
      <div className="step-intro">
        <h3 className="step-title">Configure Offering Deliverables</h3>
        <p className="step-subtitle">
          Customize the scope, pricing, and turnaround parameters for each selected module.
        </p>
      </div>

      {/* Tabs */}
      <div className="offering-tabs">
        {selectedOfferings.socialMedia && (
          <button
            type="button"
            className={`tab-btn ${currentTab === 'socialMedia' ? 'active' : ''}`}
            onClick={() => setActiveTab('socialMedia')}
          >
            <Video size={16} /> Social Media
          </button>
        )}
        {selectedOfferings.gbp && (
          <button
            type="button"
            className={`tab-btn ${currentTab === 'gbp' ? 'active' : ''}`}
            onClick={() => setActiveTab('gbp')}
          >
            <MapPin size={16} /> GBP Management
          </button>
        )}
        {selectedOfferings.paidAds && (
          <button
            type="button"
            className={`tab-btn ${currentTab === 'paidAds' ? 'active' : ''}`}
            onClick={() => setActiveTab('paidAds')}
          >
            <Megaphone size={16} /> Paid Ads
          </button>
        )}
        {selectedOfferings.website && (
          <button
            type="button"
            className={`tab-btn ${currentTab === 'website' ? 'active' : ''}`}
            onClick={() => setActiveTab('website')}
          >
            <Globe size={16} /> Website Design
          </button>
        )}
        {selectedOfferings.seo && (
          <button
            type="button"
            className={`tab-btn ${currentTab === 'seo' ? 'active' : ''}`}
            onClick={() => setActiveTab('seo')}
          >
            <Search size={16} /> SEO Services
          </button>
        )}
        {selectedOfferings.onboardingChecklist && (
          <button
            type="button"
            className={`tab-btn ${currentTab === 'onboarding' ? 'active' : ''}`}
            onClick={() => setActiveTab('onboarding')}
          >
            <ClipboardCheck size={16} /> Onboarding
          </button>
        )}
      </div>

      {/* Content Form for Social Media */}
      {currentTab === 'socialMedia' && (
        <div className="module-config-panel">
          <div className="panel-header">
            <h4>Social Media Services Configuration</h4>
            <span className="badge-pill">Matches Screenshot Table</span>
          </div>

          <div className="form-grid">
            <div className="form-group col-span-2">
              <label className="form-label">Video Production Responsibility</label>
              <div className="radio-pill-group">
                <label className={`radio-pill ${doc.socialMedia.videoSupplier === 'agency_shoots' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="videoSupplier"
                    checked={doc.socialMedia.videoSupplier === 'agency_shoots'}
                    onChange={() => handleVideoSupplierChange('agency_shoots')}
                  />
                  <span>Agency Shoots On-Site (Standard ₹10,000/mo)</span>
                </label>
                <label className={`radio-pill ${doc.socialMedia.videoSupplier === 'client_supplies' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="videoSupplier"
                    checked={doc.socialMedia.videoSupplier === 'client_supplies'}
                    onChange={() => handleVideoSupplierChange('client_supplies')}
                  />
                  <span>Client Supplies Raw Video (Standard ₹6,000/mo)</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Agreed Monthly Fee (INR) *</label>
              <input
                type="number"
                className="form-input"
                value={doc.socialMedia.monthlyFee}
                onChange={(e) => updateSubField('socialMedia', 'monthlyFee', Number(e.target.value))}
              />
              <div className="quick-fee-buttons">
                <button type="button" onClick={() => updateSubField('socialMedia', 'monthlyFee', 10000)}>₹10,000</button>
                <button type="button" onClick={() => updateSubField('socialMedia', 'monthlyFee', 8000)}>₹8,000 (Sample)</button>
                <button type="button" onClick={() => updateSubField('socialMedia', 'monthlyFee', 6000)}>₹6,000</button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Trial Period Clause</label>
              <input
                type="text"
                className="form-input"
                value={doc.socialMedia.trialPeriod}
                onChange={(e) => updateSubField('socialMedia', 'trialPeriod', e.target.value)}
                placeholder="e.g. First 1 month complimentary"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Target Social Platforms</label>
              <input
                type="text"
                className="form-input"
                value={doc.socialMedia.platforms}
                onChange={(e) => updateSubField('socialMedia', 'platforms', e.target.value)}
                placeholder="Instagram / Facebook / [OTHER IF AGREED]"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Service Brand Banner</label>
              <input
                type="text"
                className="form-input"
                value={doc.socialMedia.serviceBrand}
                onChange={(e) => updateSubField('socialMedia', 'serviceBrand', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Monthly Reels Quantity</label>
              <input
                type="text"
                className="form-input"
                value={doc.socialMedia.reelsCount}
                onChange={(e) => updateSubField('socialMedia', 'reelsCount', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Monthly Static Posts / Carousels</label>
              <input
                type="text"
                className="form-input"
                value={doc.socialMedia.staticPostsCount}
                onChange={(e) => updateSubField('socialMedia', 'staticPostsCount', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Stories & Additional Assets</label>
              <input
                type="text"
                className="form-input"
                value={doc.socialMedia.storiesAssets || ''}
                onChange={(e) => updateSubField('socialMedia', 'storiesAssets', e.target.value)}
                placeholder="Included within approved monthly content calendar"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Revision Rounds Policy</label>
              <input
                type="text"
                className="form-input"
                value={doc.socialMedia.revisionRounds || 'Up to 3 reasonable rounds per deliverable'}
                onChange={(e) => updateSubField('socialMedia', 'revisionRounds', e.target.value)}
              />
            </div>

            <div className="form-group col-span-2">
              <label className="form-label">Content Shoot Details</label>
              <input
                type="text"
                className="form-input"
                value={doc.socialMedia.contentShoot}
                onChange={(e) => updateSubField('socialMedia', 'contentShoot', e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Content Form for GBP */}
      {currentTab === 'gbp' && (
        <div className="module-config-panel">
          <div className="panel-header">
            <h4>Google Business Profile (GBP) Configuration</h4>
            {selectedOfferings.socialMedia && (
              <span className="badge-pill highlight">
                <Sparkles size={13} /> Complimentary with Social Media
              </span>
            )}
          </div>

          <div className="form-grid">
            <div className="form-group col-span-2">
              <label className="form-label">Covered Locations & Physical Address *</label>
              <textarea
                className="form-textarea"
                rows={2}
                value={doc.gbp.coveredLocations}
                onChange={(e) => updateSubField('gbp', 'coveredLocations', e.target.value)}
                placeholder="Hospital/Clinic physical location address"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Monthly Fee (INR)</label>
              <input
                type="number"
                className="form-input"
                value={doc.gbp.monthlyFee}
                disabled={selectedOfferings.socialMedia}
                onChange={(e) => updateSubField('gbp', 'monthlyFee', Number(e.target.value))}
              />
              {selectedOfferings.socialMedia && (
                <span className="field-hint text-emerald">
                  Fee auto-waived to ₹0 / month due to Social Media bundle rule.
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Weekly Post Frequency</label>
              <input
                type="text"
                className="form-input"
                value={doc.gbp.weeklyPosts}
                onChange={(e) => updateSubField('gbp', 'weeklyPosts', e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Content Form for Paid Ads */}
      {currentTab === 'paidAds' && (
        <div className="module-config-panel">
          <div className="panel-header">
            <h4>Paid Advertisements (Meta & Google) Configuration</h4>
          </div>

          <div className="form-grid">
            <div className="form-group col-span-2">
              <label className="form-label">Account Setup Type</label>
              <div className="radio-pill-group">
                <label className={`radio-pill ${doc.paidAds.accountStatus === 'existing_account' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="adAccountStatus"
                    checked={doc.paidAds.accountStatus === 'existing_account'}
                    onChange={() => handleAdAccountStatusChange('existing_account')}
                  />
                  <span>Existing Ad Account (₹2,000/mo management fee)</span>
                </label>
                <label className={`radio-pill ${doc.paidAds.accountStatus === 'new_account' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="adAccountStatus"
                    checked={doc.paidAds.accountStatus === 'new_account'}
                    onChange={() => handleAdAccountStatusChange('new_account')}
                  />
                  <span>New Ad Account Setup (₹3,000/mo initial configuration)</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Agency Management Fee (INR) *</label>
              <input
                type="number"
                className="form-input"
                value={doc.paidAds.agencyManagementFee}
                onChange={(e) => updateSubField('paidAds', 'agencyManagementFee', Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Monthly Ad Creatives Count</label>
              <input
                type="text"
                className="form-input"
                value={doc.paidAds.creativesCount}
                onChange={(e) => updateSubField('paidAds', 'creativesCount', e.target.value)}
              />
            </div>

            <div className="form-group col-span-2">
              <label className="form-label">Platforms in Scope</label>
              <div className="checkbox-row">
                <label className="check-label">
                  <input
                    type="checkbox"
                    checked={doc.paidAds.platforms.metaFbInsta}
                    onChange={(e) => {
                      updateSubField('paidAds', 'platforms', {
                        ...doc.paidAds.platforms,
                        metaFbInsta: e.target.checked
                      });
                    }}
                  />
                  Meta (Facebook + Instagram)
                </label>
                <label className="check-label">
                  <input
                    type="checkbox"
                    checked={doc.paidAds.platforms.googleSearch}
                    onChange={(e) => {
                      updateSubField('paidAds', 'platforms', {
                        ...doc.paidAds.platforms,
                        googleSearch: e.target.checked
                      });
                    }}
                  />
                  Google Search Ads
                </label>
                <label className="check-label">
                  <input
                    type="checkbox"
                    checked={doc.paidAds.platforms.googleDisplayYouTube}
                    onChange={(e) => {
                      updateSubField('paidAds', 'platforms', {
                        ...doc.paidAds.platforms,
                        googleDisplayYouTube: e.target.checked
                      });
                    }}
                  />
                  YouTube & Display
                </label>
                <label className="check-label">
                  <input
                    type="checkbox"
                    checked={doc.paidAds.platforms.linkedIn}
                    onChange={(e) => {
                      updateSubField('paidAds', 'platforms', {
                        ...doc.paidAds.platforms,
                        linkedIn: e.target.checked
                      });
                    }}
                  />
                  LinkedIn
                </label>
              </div>
            </div>

            <div className="form-group col-span-2">
              <label className="form-label">Paid Media Budget Policy Note</label>
              <input
                type="text"
                className="form-input"
                value={doc.paidAds.paidMediaBudget}
                onChange={(e) => updateSubField('paidAds', 'paidMediaBudget', e.target.value)}
              />
              <span className="field-hint">Note clearly specifies media budget is funded directly by client.</span>
            </div>
          </div>
        </div>
      )}

      {/* Content Form for Website */}
      {currentTab === 'website' && (
        <div className="module-config-panel">
          <div className="panel-header">
            <h4>Website Design & Development Configuration</h4>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Target Domain / URL</label>
              <input
                type="text"
                className="form-input"
                value={doc.website.domainUrl}
                onChange={(e) => updateSubField('website', 'domainUrl', e.target.value)}
                placeholder="https://example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">CMS Platform</label>
              <input
                type="text"
                className="form-input"
                value={doc.website.cmsPlatform}
                onChange={(e) => updateSubField('website', 'cmsPlatform', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Page Count & Scope</label>
              <input
                type="text"
                className="form-input"
                value={doc.website.pageCount}
                onChange={(e) => updateSubField('website', 'pageCount', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">One-Time Build Fee (INR)</label>
              <input
                type="number"
                className="form-input"
                value={doc.website.oneTimeFee}
                onChange={(e) => updateSubField('website', 'oneTimeFee', Number(e.target.value))}
              />
              <span className="field-hint">Tranches: 50% Kickoff, 25% Mockups, 25% Go-Live</span>
            </div>

            <div className="form-group">
              <label className="form-label">Monthly Maintenance Fee (INR)</label>
              <input
                type="number"
                className="form-input"
                value={doc.website.monthlyMaintenanceFee}
                onChange={(e) => updateSubField('website', 'monthlyMaintenanceFee', Number(e.target.value))}
                placeholder="0 if not contracted"
              />
              <span className="field-hint">Monthly backups, security patches & uptime</span>
            </div>

            <div className="form-group">
              <label className="form-label">Delivery Timeline</label>
              <input
                type="text"
                className="form-input"
                value={doc.website.deliveryTime}
                onChange={(e) => updateSubField('website', 'deliveryTime', e.target.value)}
                placeholder="4-6 weeks from receipt of full content"
              />
            </div>

            <div className="form-group">
              <label className="form-label">UAT Window</label>
              <input
                type="text"
                className="form-input"
                value={doc.website.uatPeriod}
                onChange={(e) => updateSubField('website', 'uatPeriod', e.target.value)}
                placeholder="5 Business Days"
              />
            </div>

            <div className="form-group col-span-2">
              <label className="form-label">Post-Launch Warranty Support</label>
              <input
                type="text"
                className="form-input"
                value={doc.website.postLaunchSupport}
                onChange={(e) => updateSubField('website', 'postLaunchSupport', e.target.value)}
                placeholder="30 Days defect resolution included (no code alterations)"
              />
            </div>
          </div>
        </div>
      )}

      {/* Content Form for SEO */}
      {currentTab === 'seo' && (
        <div className="module-config-panel">
          <div className="panel-header">
            <h4>Search Engine Optimisation (SEO) Configuration</h4>
          </div>

          <div className="form-grid">
            <div className="form-group col-span-2">
              <label className="form-label">Target Website(s) in Scope *</label>
              <input
                type="text"
                className="form-input"
                value={doc.seo.scopeUrls}
                onChange={(e) => updateSubField('seo', 'scopeUrls', e.target.value)}
                placeholder="https://example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Primary Keywords Target</label>
              <input
                type="number"
                className="form-input"
                value={doc.seo.primaryKeywordsCount}
                onChange={(e) => updateSubField('seo', 'primaryKeywordsCount', Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Monthly Retainer (INR)</label>
              <input
                type="number"
                className="form-input"
                value={doc.seo.monthlyRetainer}
                onChange={(e) => updateSubField('seo', 'monthlyRetainer', Number(e.target.value))}
              />
            </div>

            <div className="form-group col-span-2">
              <label className="form-label">On-Page Optimisation Volume</label>
              <input
                type="text"
                className="form-input"
                value={doc.seo.pagesOptimisedPerMonth}
                onChange={(e) => updateSubField('seo', 'pagesOptimisedPerMonth', e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Content Form for Onboarding Checklist (Annexure G) */}
      {currentTab === 'onboarding' && (
        <div className="module-config-panel">
          <div className="panel-header">
            <h4>Annexure G: Customer Onboarding Checklist Parameters</h4>
            <span className="badge-pill">10-Point Readiness Matrix</span>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Target Kickoff Date</label>
              <input
                type="text"
                className="form-input"
                value={doc.onboarding.targetKickoffDate}
                onChange={(e) => updateSubField('onboarding', 'targetKickoffDate', e.target.value)}
                placeholder="e.g. Within 5 business days of signing"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Provider Designated Lead / Manager</label>
              <input
                type="text"
                className="form-input"
                value={doc.onboarding.designatedManager}
                onChange={(e) => updateSubField('onboarding', 'designatedManager', e.target.value)}
                placeholder="sBLOOM Dedicated Account Lead"
              />
            </div>

            <div className="form-group col-span-2">
              <label className="form-label">Delegated Access Protocol</label>
              <input
                type="text"
                className="form-input"
                value={doc.onboarding.delegatedAccessStatus}
                onChange={(e) => updateSubField('onboarding', 'delegatedAccessStatus', e.target.value)}
                placeholder="Delegated admin / partner access without sharing raw master passwords"
              />
              <span className="field-hint">
                Annexure G covers 10 mandatory assets: Meta Business Portfolio, Google Tag Manager/GA4, Google Search Console, Brand kit, Doctor/Practitioner bio & photo, Medical registrations, High-Res clinical photography, Domain DNS credentials, WhatsApp Business number, and Direct billing card setup.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
