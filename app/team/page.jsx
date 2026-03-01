"use client"

import Image from "next/image";
import { useState } from "react";

const board = [
  { name: "Amb. Vivian Anyanwu", role: "Board Member", img: "/ceo/ceo.png" },
  { name: "Amb. Jarlath Anyanwu", role: "Board Member", img: "/ceo/ceotwo.png" },
  { name: "Happiness Chinasa Anyanwu", role: "Board Member", img: "/ceo/chinasa.png" },
  { name: "Rev Dr. Emmanuel Ojukwu", role: "Patron", img: "/management/emmanuel.png" },
];

const management = [
  {
    name: "Vero John David",
    role: "Imo State Coordinator",
    img: "/management/vera.png",
    bio: "State coordinator providing leadership and oversight for programs, driving community engagement and impact across Imo State.",
  },
  {
    name: "Leticia Ebenezer",
    role: "Lagos State Coordinator",
    img: "/management/leticia.png",
    bio: "State coordinator overseeing programs and driving community engagement initiatives across Lagos State.",
  },
  {
    name: "Onyedikachi Nnenna",
    role: "Finance",
    img: "/testimony/nnena.png",
    bio: "Finance lead overseeing financial planning, budgeting, and accountability to ensure transparent and sustainable operations.",
  },
  {
    name: "Success Ukalike",
    role: "Rivers State Coordinator",
    img: "/management/success.png",
    bio: "State coordinator providing leadership and oversight for programs, driving community engagement and impact across Rivers State.",
  },
  {
    name: "Bibian Nnenna Amah",
    role: "London Coordinator",
    img: "/management/bibian.png",
    bio: "International coordinator leading programs and strengthening community engagement initiatives across London.",
  },
  {
    name: "Chukudebelu Ugochi",
    role: "Abuja Coordinator",
    img: "/management/ugochi.png",
    bio: "Coordinator overseeing programs and leading community engagement efforts to drive meaningful impact across Abuja.",
  },
];

export default function TeamPage() {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <div className="min-h-screen bg-[#D4A574]">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 relative">
          {/* Board Section */}
          <div>
            <h2 className="text-center text-gray-800 text-sm tracking-[0.3em] mb-12 font-medium">
              THE BOARD
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {board.map((member, index) => (
                <div 
                  key={index} 
                  className="text-center cursor-pointer group"
                  onClick={() => setActiveMember({ ...member, type: "board" })}
                >
                  <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden bg-gray-300 group-hover:ring-4 group-hover:ring-blue-500/30 transition-all">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all"
                      sizes="96px"
                    />
                  </div>
                  <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                    {member.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-600/20 -translate-x-1/2"></div>

          {/* Management Section */}
          <div>
            <h2 className="text-center text-gray-800 text-sm tracking-[0.3em] mb-12 font-medium">
              THE MANAGEMENT
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {management.map((member, index) => (
                <div 
                  key={index} 
                  className="text-center cursor-pointer group"
                  onClick={() => setActiveMember({ ...member, type: "management" })}
                >
                  <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden bg-gray-300 group-hover:ring-4 group-hover:ring-blue-500/30 transition-all">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all"
                      sizes="96px"
                    />
                  </div>
                  <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                    {member.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {activeMember && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveMember(null)}
        >
          <div 
            className="bg-blue-900 text-white rounded-lg p-6 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              ✕
            </button>
            
            <h3 className="text-xl font-bold mb-1">{activeMember.name}</h3>
            <p className="text-blue-200 text-sm mb-4">{activeMember.role}</p>
            
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20">
                <span className="text-sm">✉</span>
              </a>
            </div>
            
            {activeMember.bio && (
              <p className="text-sm text-blue-100 leading-relaxed">
                {activeMember.bio}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}