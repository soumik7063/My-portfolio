import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
const StatBox = ({ value, label }) => (
  <div className="flex-1 bg-gradient-to-b from-slate-800/70 to-slate-800/40 border border-slate-700 rounded-xl p-4 text-center">
    <div className="text-2xl font-semibold text-sky-300">{value}</div>
    <div className="text-xs text-slate-300 mt-1">{label}</div>
  </div>
);

const AchievementRow = ({  text }) => (
  <div className="flex items-center gap-3 bg-slate-800/40 border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-200">
    <div className="w-8 h-8 flex items-center justify-center bg-slate-900/40 rounded-md">
      <FaArrowTrendUp size={16} />
    </div>
    <div className="truncate">{text}</div>
  </div>
);
const SingleCPprofile = ({logo,platform,badge,rating,problems,achievements,maxRating,bestRank,contests,externalUrl}) => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-700/60 p-6 bg-gradient-to-b from-slate-900/60 to-slate-900/40 shadow-inner">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md flex items-center justify-center text-white font-bold">
           {logo}
          </div>

          <div>
            <div className="text-xl font-semibold text-sky-300">{platform}</div>
            <div className="inline-block mt-1 text-xs px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-100">
              {badge}
            </div>
          </div>
        </div>

        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300/80 hover:text-slate-100"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        )}
      </div>

      <div className="mt-6 flex gap-4">
        <StatBox value={rating} label="Rating" />
        <StatBox value={problems} label="Problems" />
      </div>

      <div className="mt-6">
        <div className="text-slate-200 font-medium mb-3">Achievements</div>
        <div className="flex flex-col gap-3">
          {achievements.length > 0 ? (
            <AchievementRow text={achievements}/>
          ) : (
            <div className="text-sm text-slate-400">No achievements yet</div>
          )}
        </div>
      </div>

      <div className="mt-6 border-t border-slate-700/40 pt-4 flex flex-col gap-2 text-sm text-slate-300">
        {typeof maxRating !== "undefined" && (
          <div className='flex items-center'>
            <FaMedal size={13} className='mr-2 text-yellow-50' />
            Max Rating: <span className="font-semibold text-sky-300">{maxRating}</span>
          </div>
        )}
        {bestRank && (
          <div>
            Best Rank: <span className="font-semibold text-sky-300">{bestRank}</span>
          </div>
        )}
        {typeof contests !== "undefined" && (
          <div>
            Contests: <span className="font-semibold text-sky-300">{contests}+</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleCPprofile