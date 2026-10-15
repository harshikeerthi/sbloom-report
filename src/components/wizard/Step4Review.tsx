import React from 'react';
import type { DocumentData } from '../../types/document';
import { calculatePricingAndInclusions, formatINR } from '../../utils/pricingEngine';
import { CheckCircle2, AlertTriangle, FileText, Printer, Download, Sparkles } from 'lucide-react';

interface Props {
  doc: DocumentData;
  onPreviewClick: () => void;
  onPrintClick: () => void;
  onExportJson: () => void;
}

export const Step4Review: React.FC<Props> = ({ 
  doc, 
  onPreviewClick, 
  onPrintClick, 
  onExportJson 
}) => {
  const pricing = calculatePricingAndInclusions(doc);

  // Validation checks
  const errors: string[] = [];
  if (!doc.clientInfo.customerName.trim()) {
    errors.push('Customer Name is required.');
  }
  if (!doc.clientInfo.representativeName.trim()) {
    errors.push('Customer Representative Name is required.');
  }
  if (!doc.clientInfo.effectiveDate.trim()) {
    errors.push('Agreement Effective Date is required.');
  }
  if (pricing.attachedAnnexuresList.length === 0) {
    errors.push('At least one offering must be selected.');
  }

  const isValid = errors.length === 0;

  return (
    <div className="wizard-step-pane">
      <div className="step-intro">
        <h3 className="step-title">Review & Commercial Summary</h3>
        <p className="step-subtitle">
          Verify client details, pricing calculations, and attached annexures before finalizing the agreement.
        </p>
      </div>

      {/* Validation state */}
      {!isValid ? (
        <div className="alert-callout warning">
          <AlertTriangle className="alert-icon" size={20} />
          <div className="alert-text">
            <strong>Missing Required Fields:</strong>
            <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="alert-callout success">
          <CheckCircle2 className="alert-icon" size={20} />
          <div className="alert-text">
            <strong>Ready for Generation:</strong> All required fields are complete and aligned with the Master Agreement terms.
          </div>
        </div>
      )}

      {/* Pricing Summary Box */}
      <div className="commercial-card">
        <div className="comm-header">
          <h4>Commercial Overview</h4>
          <span className="badge-pill">Currency: INR (₹)</span>
        </div>

        <div className="comm-stats-row">
          <div className="comm-stat-box">
            <span className="stat-label">Monthly Retainer</span>
            <span className="stat-value text-primary">
              {formatINR(pricing.monthlyRecurringTotal)} <small>/ mo</small>
            </span>
          </div>

          {pricing.oneTimeTotal > 0 && (
            <div className="comm-stat-box">
              <span className="stat-label">One-Time Deliverables</span>
              <span className="stat-value text-secondary">
                {formatINR(pricing.oneTimeTotal)}
              </span>
            </div>
          )}

          {pricing.totalMonthlySavings > 0 && (
            <div className="comm-stat-box highlight-savings">
              <span className="stat-label">
                <Sparkles size={14} /> Monthly Package Savings
              </span>
              <span className="stat-value text-emerald">
                {formatINR(pricing.totalMonthlySavings)} <small>/ mo</small>
              </span>
            </div>
          )}
        </div>

        {/* Breakdown table */}
        <div className="comm-table-wrap">
          <table className="comm-mini-table">
            <thead>
              <tr>
                <th>Service Module</th>
                <th>Cycle</th>
                <th style={{ textAlign: 'right' }}>Agreed Fee</th>
              </tr>
            </thead>
            <tbody>
              {pricing.breakdown.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <strong>{item.serviceName}</strong>
                    {item.notes && <div className="stat-note">{item.notes}</div>}
                  </td>
                  <td>{item.type === 'monthly' ? 'Monthly' : 'One-Time'}</td>
                  <td style={{ textAlign: 'right' }} className={item.isComplimentary ? 'text-emerald font-bold' : 'font-bold'}>
                    {item.isComplimentary ? 'FREE (₹0)' : formatINR(item.finalPrice)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attached Annexures List */}
      <div className="annexures-list-box">
        <h4 className="annex-box-title">Document Page Sequence (V2.0 Master Service Agreement):</h4>
        <ol className="annex-ordered-list">
          <li>
            <strong>Master Service Agreement:</strong> Corporate Particulars (OTTOBON / sBLOOM), Core Terms Sections 1–19, Support SLA Matrix & Dual Execution Block
          </li>
          {pricing.attachedAnnexuresList.map((annex, idx) => (
            <li key={idx} className="annex-item-highlight">
              <strong>{annex}</strong> (Starts on new page with dedicated scope table and approval sign-offs)
            </li>
          ))}
        </ol>
      </div>

      {/* Action buttons */}
      <div className="review-action-bar">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onExportJson}
        >
          <Download size={16} /> Save Draft (JSON)
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onPreviewClick}
        >
          <FileText size={16} /> Open Document Preview
        </button>

        <button
          type="button"
          className="btn btn-primary"
          disabled={!isValid}
          onClick={onPrintClick}
        >
          <Printer size={16} /> Print / Export to PDF
        </button>
      </div>
    </div>
  );
};
