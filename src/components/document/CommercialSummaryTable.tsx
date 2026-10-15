import React from 'react';
import type { DocumentData } from '../../types/document';
import { type PricingSummary, formatINR } from '../../utils/pricingEngine';

interface Props {
  doc: DocumentData;
  pricing: PricingSummary;
}

export const CommercialSummaryTable: React.FC<Props> = ({ doc, pricing }) => {
  const { clientInfo } = doc;

  return (
    <div className="doc-section doc-page-break">
      <div className="doc-annexure-header">
        <h2 className="annexure-title">CONSOLIDATED COMMERCIAL SUMMARY & APPROVAL</h2>
        <p className="annexure-subtitle">
          Summary of all engaged services, applicable fees, billing cycles, and approved terms.
        </p>
      </div>

      <table className="doc-table doc-deliverables-table" style={{ marginTop: '16px' }}>
        <thead>
          <tr>
            <th style={{ width: '38%' }}>Service Module</th>
            <th style={{ width: '18%' }}>Billing Basis</th>
            <th style={{ width: '20%' }}>Standard Rate</th>
            <th>Agreed Fee</th>
          </tr>
        </thead>
        <tbody>
          {pricing.breakdown.map((item, idx) => (
            <tr key={idx}>
              <td>
                <strong>{item.serviceName}</strong>
                {item.notes && <div className="doc-item-note">{item.notes}</div>}
              </td>
              <td>{item.type === 'monthly' ? 'Monthly Retainer' : 'One-Time'}</td>
              <td style={{ textDecoration: item.isComplimentary ? 'line-through' : 'none', color: '#64748b' }}>
                {formatINR(item.standardPrice)}
              </td>
              <td className={item.isComplimentary ? 'doc-td-free' : 'doc-td-bold'}>
                {item.isComplimentary ? 'COMPLIMENTARY (₹0)' : `${formatINR(item.finalPrice)}`}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {pricing.totalMonthlySavings > 0 && (
            <tr className="doc-tfoot-savings">
              <td colSpan={3}><strong>Total Monthly Package Savings (e.g. Complimentary GBP)</strong></td>
              <td className="doc-td-free"><strong>- {formatINR(pricing.totalMonthlySavings)} / month</strong></td>
            </tr>
          )}
          {pricing.oneTimeTotal > 0 && (
            <tr className="doc-tfoot-row">
              <td colSpan={3}><strong>Total One-Time Deliverables</strong></td>
              <td className="doc-td-bold">{formatINR(pricing.oneTimeTotal)}</td>
            </tr>
          )}
          <tr className="doc-tfoot-total">
            <td colSpan={3}>
              <strong>NET MONTHLY RECURRING TOTAL [Exclusive of applicable GST]</strong>
            </td>
            <td className="doc-total-amount">
              {formatINR(pricing.monthlyRecurringTotal)} / month
            </td>
          </tr>
        </tfoot>
      </table>

      {/* Commercial Terms Notice */}
      <div className="doc-card-callout" style={{ marginTop: '20px' }}>
        <h4 className="callout-heading">Important Commercial Terms:</h4>
        <ul className="doc-bullet-list">
          <li><strong>Invoicing:</strong> Monthly retainers are invoiced on the 1st of each calendar month, payable under NET 5 terms.</li>
          <li><strong>Statutory Taxes:</strong> GST @ 18% (or current applicable rate) shall be billed additionally on all invoices.</li>
          <li><strong>Direct Ad Spend:</strong> Paid advertising budgets are payable directly by the Customer to Meta / Google and are not included in the agency management fees above.</li>
        </ul>
      </div>

      {/* Acceptance Block */}
      <div style={{ marginTop: '30px' }}>
        <h3 className="doc-subsection-title">FINAL ACCEPTANCE & AUTHORIZATION</h3>
        <p className="doc-clause-p" style={{ marginBottom: '14px' }}>
          By signing below, the parties agree that the Master Service Level Agreement and the Attached Annexures listed herein constitute the complete binding contract.
        </p>

        <div className="doc-signature-block">
          <div className="sig-column">
            <div className="sig-header">ACCEPTED FOR SERVICE PROVIDER</div>
            <div className="sig-line"></div>
            <p className="sig-label">Name: <strong>{clientInfo.serviceProviderRep}</strong></p>
            <p className="sig-label">Title: {clientInfo.serviceProviderTitle}</p>
            <p className="sig-label">Entity: {clientInfo.serviceProviderName}</p>
            <p className="sig-label">Date: {clientInfo.effectiveDate}</p>
          </div>
          <div className="sig-column">
            <div className="sig-header">ACCEPTED FOR CUSTOMER</div>
            <div className="sig-line"></div>
            <p className="sig-label">Name: <strong>{clientInfo.representativeName}</strong></p>
            <p className="sig-label">Title: {clientInfo.representativeTitle}</p>
            <p className="sig-label">Entity: {clientInfo.customerName}</p>
            <p className="sig-label">Date: {clientInfo.effectiveDate}</p>
          </div>
        </div>
      </div>

      <div className="doc-page-footer">
        PRIVATE & CONFIDENTIAL | Consolidated Commercial Summary
      </div>
    </div>
  );
};
