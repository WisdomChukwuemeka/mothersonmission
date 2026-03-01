"use client"

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const DonatePage = () => {
  const [copied, setCopied] = useState(null);

  const details = {
    ngoName: "MOTHERS ON CHRISTIAN MISSION INTERNATIONAL",
    bankName: "FCMB",
    accountNumber: "9491050012"
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const DetailCard = ({ label, value, field }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{label}</p>
      <div className="flex items-center justify-between gap-4">
        <span className="text-xl font-bold text-gray-900 break-all">{value}</span>
        <button
          onClick={() => copyToClipboard(value, field)}
          className="flex-shrink-0 p-3 bg-gray-100 rounded-full active:bg-gray-200 transition-colors"
        >
          {copied === field ? (
            <Check className="w-5 h-5 text-green-600" />
          ) : (
            <Copy className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full  space-y-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Bank Transfer</h1>
          <p className="text-gray-500 mt-1">Tap to copy details</p>
        </div>

        <DetailCard label="NGO Name" value={details.ngoName} field="ngoName" />
        <DetailCard label="Bank Name" value={details.bankName} field="bankName" />
        <DetailCard label="Account Number" value={details.accountNumber} field="accountNumber" />

        <p className="text-center text-sm text-gray-400 mt-8">
          Thank you for your support ❤️
        </p>
      </div>
    </div>
  );
};

export default DonatePage;